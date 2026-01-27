const express = require('express');
const app = express();
const session = require("express-session");
const port = 3000;
const path = require("path");
const bodyParser = require("body-parser");
const flash = require("connect-flash");
const mysql2 = require('mysql2');

// MySQL2 Database Connection
const db = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'student_management'
});

// Check database connection
db.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// Create students table if not exists
const createTableQuery = `CREATE TABLE IF NOT EXISTS students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    roll_number VARCHAR(50) UNIQUE NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone VARCHAR(15) NOT NULL,
    date_of_birth DATE NOT NULL,
    gender ENUM('Male', 'Female', 'Other') NOT NULL,
    address TEXT NOT NULL,
    city VARCHAR(50) NOT NULL,
    state VARCHAR(50) NOT NULL,
    enrollment_date DATE NOT NULL,
    course VARCHAR(100) NOT NULL,
    gpa DECIMAL(3, 2) DEFAULT 0.00,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)`;

db.query(createTableQuery, (err, result) => {
    if (err) {
        console.error('Error creating table:', err);
        return;
    }
    console.log('Students table created or already exists');
});

// Set views directory
app.set('views', path.join(__dirname, 'student-views'));
app.use(express.static(path.join(__dirname, 'public')));

// Set view engine
app.set('view engine', 'ejs');

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
    secret: 'student_management_secret',
    resave: false,
    saveUninitialized: true
}));

app.use(flash());
app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    next();
});

// =============== HOME PAGE ===============
app.get('/', (req, res) => {
    res.render('student-index', { title: 'Student Management System - Home' });
});

// =============== READ - VIEW ALL STUDENTS ===============
app.get('/students', (req, res) => {
    db.query("SELECT * FROM students ORDER BY id DESC", (err, rows) => {
        if (err) {
            console.error(err);
            req.flash("error", "Error fetching students");
            res.render("student-dashboard", { data: [], title: 'Student Management - Dashboard' });
        } else {
            res.render("student-dashboard", { data: rows, title: 'Student Management - Dashboard' });
        }
    });
});

// =============== CREATE - ADD NEW STUDENT PAGE ===============
app.get('/students/add', (req, res) => {
    res.render("add-student", { title: 'Add New Student' });
});

// =============== CREATE - STORE STUDENT IN DATABASE ===============
app.post('/students/store', (req, res) => {
    const { roll_number, first_name, last_name, email, phone, date_of_birth, gender, 
            address, city, state, enrollment_date, course, gpa } = req.body;

    // Validation
    if (!roll_number || !first_name || !last_name || !email || !phone) {
        req.flash("error", "Please fill in all required fields");
        return res.redirect('/students/add');
    }

    const query = "INSERT INTO students (roll_number, first_name, last_name, email, phone, date_of_birth, gender, address, city, state, enrollment_date, course, gpa) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

    db.query(query, [roll_number, first_name, last_name, email, phone, date_of_birth, gender, address, city, state, enrollment_date, course, gpa || 0], (err, result) => {
        if (err) {
            console.error(err);
            if (err.code === 'ER_DUP_ENTRY') {
                req.flash("error", "Roll number or Email already exists");
            } else {
                req.flash("error", err.message);
            }
            res.redirect('/students/add');
        } else {
            req.flash("success", "Student added successfully");
            res.redirect('/students');
        }
    });
});

// =============== READ - VIEW SINGLE STUDENT ===============
app.get('/students/view/:id', (req, res) => {
    const id = req.params.id;
    db.query("SELECT * FROM students WHERE id = ?", [id], (err, rows) => {
        if (err) {
            req.flash("error", "Error fetching student details");
            res.redirect('/students');
        } else if (rows.length === 0) {
            req.flash("error", "Student not found");
            res.redirect('/students');
        } else {
            res.render("view-student", { student: rows[0], title: 'View Student Details' });
        }
    });
});

// =============== UPDATE - EDIT STUDENT PAGE ===============
app.get('/students/edit/:id', (req, res) => {
    const id = req.params.id;
    db.query("SELECT * FROM students WHERE id = ?", [id], (err, rows) => {
        if (err) {
            req.flash("error", "Error fetching student");
            res.redirect('/students');
        } else if (rows.length === 0) {
            req.flash("error", "Student not found");
            res.redirect('/students');
        } else {
            res.render("edit-student", { student: rows[0], title: 'Edit Student' });
        }
    });
});

// =============== UPDATE - UPDATE STUDENT IN DATABASE ===============
app.post('/students/update/:id', (req, res) => {
    const id = req.params.id;
    const { roll_number, first_name, last_name, email, phone, date_of_birth, gender, 
            address, city, state, enrollment_date, course, gpa } = req.body;

    if (!roll_number || !first_name || !last_name || !email || !phone) {
        req.flash("error", "Please fill in all required fields");
        return res.redirect(`/students/edit/${id}`);
    }

    const query = "UPDATE students SET roll_number=?, first_name=?, last_name=?, email=?, phone=?, date_of_birth=?, gender=?, address=?, city=?, state=?, enrollment_date=?, course=?, gpa=? WHERE id=?";

    db.query(query, [roll_number, first_name, last_name, email, phone, date_of_birth, gender, address, city, state, enrollment_date, course, gpa || 0, id], (err, result) => {
        if (err) {
            console.error(err);
            if (err.code === 'ER_DUP_ENTRY') {
                req.flash("error", "Roll number or Email already exists");
            } else {
                req.flash("error", err.message);
            }
            res.redirect(`/students/edit/${id}`);
        } else {
            req.flash("success", "Student updated successfully");
            res.redirect('/students');
        }
    });
});

// =============== DELETE - REMOVE STUDENT FROM DATABASE ===============
app.get('/students/delete/:id', (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM students WHERE id = ?", [id], (err, result) => {
        if (err) {
            console.error(err);
            req.flash("error", "Error deleting student");
        } else {
            if (result.affectedRows === 0) {
                req.flash("error", "Student not found");
            } else {
                req.flash("success", "Student deleted successfully");
            }
        }
        res.redirect('/students');
    });
});

// =============== SEARCH STUDENTS ===============
app.post('/students/search', (req, res) => {
    const searchQuery = req.body.search || '';
    const query = "SELECT * FROM students WHERE first_name LIKE ? OR last_name LIKE ? OR email LIKE ? OR roll_number LIKE ? ORDER BY id DESC";
    const searchParam = `%${searchQuery}%`;

    db.query(query, [searchParam, searchParam, searchParam, searchParam], (err, rows) => {
        if (err) {
            req.flash("error", "Error searching students");
            res.redirect('/students');
        } else {
            res.render("student-dashboard", { data: rows, title: 'Student Management - Search Results' });
        }
    });
});

// Start Server
app.listen(port, () => {
    console.log(`Student Management Server running on http://localhost:${port}`);
    console.log(`Access the application at http://localhost:${port}`);
});
