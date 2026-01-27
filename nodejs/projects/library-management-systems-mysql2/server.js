const express=require('express');
const app=express();
const session=require("express-session");
const port=3000;
// load a path ...
const path=require("path");
// load a title ..
const { title }=require("process");
// body-parser (body-parser is used to read a form data)
const bodyParser=require("body-parser");
// connect-flash (is a library i.e used to pass a flash messages in UI)
const flash=require("connect-flash");
// create mysql2 connection
const mysql2=require('mysql2');
const db=mysql2.createConnection({
host:'localhost',
user:'root',
password:'admin',
database:'library_management_system'
});
// check connection is stablished or not
db.connect((err)=>{
if(err){
console.error('Error connecting to database:',err);
return;
}
console.log('Connected to database');
});

// Create database tables
const createTablesQueries = [
  // Students table
  `CREATE TABLE IF NOT EXISTS students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    student_name VARCHAR(255) NOT NULL,
    student_id VARCHAR(100) NOT NULL UNIQUE,
    email VARCHAR(255),
    phone VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )`,
  // Books table
  `CREATE TABLE IF NOT EXISTS books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    book_name VARCHAR(255) NOT NULL,
    author VARCHAR(255),
    isbn VARCHAR(100) UNIQUE,
    category VARCHAR(100),
    quantity INT DEFAULT 0,
    available_quantity INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )`,
  // Book assignments (when student takes a book)
  `CREATE TABLE IF NOT EXISTS book_assignments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT NOT NULL,
    book_id INT NOT NULL,
    assignment_date DATE NOT NULL,
    approved INT DEFAULT 0,
    approval_date DATE,
    approved_by VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (student_id) REFERENCES students(id) ON DELETE CASCADE,
    FOREIGN KEY (book_id) REFERENCES books(id) ON DELETE CASCADE
  )`,
  // Book returns table
  `CREATE TABLE IF NOT EXISTS book_returns (
    id INT AUTO_INCREMENT PRIMARY KEY,
    assignment_id INT NOT NULL,
    return_date DATE,
    condition VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (assignment_id) REFERENCES book_assignments(id) ON DELETE CASCADE
  )`
];

// Execute create table queries
createTablesQueries.forEach((query) => {
  db.query(query, (err, result) => {
    if(err){
      console.error('Error creating table:', err);
      return;
    }
    console.log('Table created or already exists');
  });
});

// load or set a directory or static path in templates..
app.set('views',path.join(__dirname,'views'));
// used a static path load in templates 
app.use(express.static(path.join(__dirname,'public')));

// set a default engine ejs 
app.set('view engine','ejs');

// middleware (middleware is an immidiator that can be pass data from ui in mysql in encoded formate)
app.use(bodyParser.urlencoded({extended:false}));
// used session for flash 
app.use(session({

secret:'crud_secret',
resave:false, 
saveUninitialized:true 

}))

// set globally connect-flash as success and error
app.use(flash());
app.use((req,res,next)=>{

    res.locals.success=req.flash("success");
    res.locals.error=req.flash("error");
    next();
})

// ==================== DASHBOARD ====================
// create a routing of home page ....
app.get('/',((req,res)=>{
res.render('index',{title:'Library Management System - Home'});
}))

// create a routing of add dashboard & manage all task or read all task....
app.get('/dashboard',((req,res)=>{
    // Get total counts for dashboard
    const queries = {
      totalStudents: "SELECT COUNT(*) as count FROM students",
      totalBooks: "SELECT COUNT(*) as count FROM books",
      totalAvailable: "SELECT SUM(available_quantity) as count FROM books",
      recentAssignments: "SELECT ba.id, s.student_name, b.book_name, ba.assignment_date, ba.approved FROM book_assignments ba JOIN students s ON ba.student_id = s.id JOIN books b ON ba.book_id = b.id ORDER BY ba.assignment_date DESC LIMIT 5",
      pendingApprovals: "SELECT COUNT(*) as count FROM book_assignments WHERE approved = 0"
    };

    let data = {};
    let completed = 0;

    // Execute all queries
    Object.keys(queries).forEach(key => {
      db.query(queries[key], (err, rows) => {
        if(err){
          console.error(err);
          data[key] = key.includes('recent') ? [] : 0;
        } else {
          data[key] = key.includes('recent') ? rows : (rows[0]?.count || 0);
        }
        completed++;
        if(completed === Object.keys(queries).length){
          res.render("dashboard", {
            title: 'Library Management System :: Dashboard',
            totalStudents: data.totalStudents,
            totalBooks: data.totalBooks,
            totalAvailable: data.totalAvailable,
            recentAssignments: data.recentAssignments,
            pendingApprovals: data.pendingApprovals
          });
        }
      });
    });
}))

// ==================== STUDENT ROUTES ====================
// View all students
app.get('/students',((req,res)=>{
    db.query("SELECT * FROM students ORDER BY created_at DESC",(err,rows)=>{
        if(err){
            req.flash("error",err.message);
            res.render("students",{data:[]});
        } else {
            res.render("students",{data:rows,title:'Library Management System :: Students'});
        }
    })
}))

// Add student page
app.get('/add-student',((req,res)=>{
    res.render("addstudent",{title:'Library Management System :: Add Student'});
}))

// Insert student
app.post('/add-student',(req,res)=>{
    const {student_name, student_id, email, phone} = req.body;
    const sql = `INSERT INTO students(student_name, student_id, email, phone) VALUES (?, ?, ?, ?)`;
    db.query(sql, [student_name, student_id, email, phone], (err, result) => {
        if(err){
            console.error(err);
            req.flash("error", "Student cannot be added: " + err.message);
            return res.redirect("/add-student");
        }
        req.flash("success", "Student added successfully");
        res.redirect("/students");
    });
})

// Delete student
app.get("/delete-student/:id",(req,res)=>{
    db.query("DELETE FROM students WHERE id=?",[req.params.id],(err)=>{
        if(err){
            req.flash("error","Student not deleted");
        } else {
            req.flash("success","Student deleted successfully")
        }
        res.redirect("/students");
    })
})

// Edit student page
app.get("/edit-student/:id",(req,res)=>{
    db.query("SELECT * FROM students WHERE id=?",[req.params.id],(err,rows)=>{
        if(err){
            req.flash("error","Student not found");
            res.redirect("/students");
        } else {
            res.render("editstudent",{data:rows[0],title:'Library Management System :: Edit Student'});
        }
    })
})

// Update student
app.post("/update-student/:id",(req,res)=>{
    const {student_name, student_id, email, phone} = req.body;
    const id = req.params.id;
    db.query(
        "UPDATE students SET student_name=?, student_id=?, email=?, phone=? WHERE id=?",
        [student_name, student_id, email, phone, id],
        (err)=>{
            if(err){
                req.flash("error","Student not updated: " + err.message);
            } else {
                req.flash("success","Student updated successfully");
                res.redirect('/students');
            }
        }
    )
})

// ==================== BOOK ROUTES ====================
// View all books
app.get('/books',((req,res)=>{
    db.query("SELECT * FROM books ORDER BY created_at DESC",(err,rows)=>{
        if(err){
            req.flash("error",err.message);
            res.render("books",{data:[]});
        } else {
            res.render("books",{data:rows,title:'Library Management System :: Books'});
        }
    })
}))

// Add book page
app.get('/add-book',((req,res)=>{
    res.render("addbook",{title:'Library Management System :: Add Book'});
}))

// Insert book
app.post('/add-book',(req,res)=>{
    const {book_name, author, isbn, category, quantity} = req.body;
    const sql = `INSERT INTO books(book_name, author, isbn, category, quantity, available_quantity) VALUES (?, ?, ?, ?, ?, ?)`;
    db.query(sql, [book_name, author, isbn, category, quantity, quantity], (err, result) => {
        if(err){
            console.error(err);
            req.flash("error", "Book cannot be added: " + err.message);
            return res.redirect("/add-book");
        }
        req.flash("success", "Book added successfully");
        res.redirect("/books");
    });
})

// Delete book
app.get("/delete-book/:id",(req,res)=>{
    db.query("DELETE FROM books WHERE id=?",[req.params.id],(err)=>{
        if(err){
            req.flash("error","Book not deleted");
        } else {
            req.flash("success","Book deleted successfully")
        }
        res.redirect("/books");
    })
})

// Edit book page
app.get("/edit-book/:id",(req,res)=>{
    db.query("SELECT * FROM books WHERE id=?",[req.params.id],(err,rows)=>{
        if(err){
            req.flash("error","Book not found");
            res.redirect("/books");
        } else {
            res.render("editbook",{data:rows[0],title:'Library Management System :: Edit Book'});
        }
    })
})

// Update book
app.post("/update-book/:id",(req,res)=>{
    const {book_name, author, isbn, category, quantity} = req.body;
    const id = req.params.id;
    db.query(
        "UPDATE books SET book_name=?, author=?, isbn=?, category=?, quantity=?, available_quantity=? WHERE id=?",
        [book_name, author, isbn, category, quantity, quantity, id],
        (err)=>{
            if(err){
                req.flash("error","Book not updated: " + err.message);
            } else {
                req.flash("success","Book updated successfully");
                res.redirect('/books');
            }
        }
    )
})

// ==================== BOOK ASSIGNMENT ROUTES ====================
// View all assignments
app.get('/assignments',((req,res)=>{
    db.query(
      `SELECT ba.id, s.student_name, b.book_name, ba.assignment_date, ba.approved, ba.approval_date, ba.student_id, ba.book_id 
       FROM book_assignments ba 
       JOIN students s ON ba.student_id = s.id 
       JOIN books b ON ba.book_id = b.id 
       ORDER BY ba.assignment_date DESC`,
      (err,rows)=>{
        if(err){
          req.flash("error",err.message);
          res.render("assignments",{data:[]});
        } else {
          res.render("assignments",{data:rows,title:'Library Management System :: Book Assignments'});
        }
      }
    )
}))

// Assign book page
app.get('/assign-book',((req,res)=>{
    // Get all students and books
    db.query("SELECT * FROM students ORDER BY student_name", (err, students) => {
        db.query("SELECT * FROM books WHERE available_quantity > 0 ORDER BY book_name", (err, books) => {
            res.render("assignbook",{
                students: students || [],
                books: books || [],
                title:'Library Management System :: Assign Book'
            });
        });
    });
}))

// Insert book assignment
app.post('/assign-book',(req,res)=>{
    const {student_id, book_id, assignment_date} = req.body;
    const sql = `INSERT INTO book_assignments(student_id, book_id, assignment_date) VALUES (?, ?, ?)`;
    db.query(sql, [student_id, book_id, assignment_date], (err, result) => {
        if(err){
            console.error(err);
            req.flash("error", "Book cannot be assigned: " + err.message);
            return res.redirect("/assign-book");
        }
        // Decrease available quantity
        db.query("UPDATE books SET available_quantity = available_quantity - 1 WHERE id = ?", [book_id], (err) => {
            req.flash("success", "Book assigned successfully");
            res.redirect("/assignments");
        });
    });
})

// Delete assignment
app.get("/delete-assignment/:id",(req,res)=>{
    // Get book_id first to update quantity
    db.query("SELECT book_id FROM book_assignments WHERE id=?",[req.params.id],(err,rows)=>{
        if(err || !rows.length) {
            req.flash("error","Assignment not found");
            return res.redirect("/assignments");
        }
        const book_id = rows[0].book_id;
        db.query("DELETE FROM book_assignments WHERE id=?",[req.params.id],(err)=>{
            if(err){
                req.flash("error","Assignment not deleted");
            } else {
                // Increase available quantity
                db.query("UPDATE books SET available_quantity = available_quantity + 1 WHERE id = ?", [book_id], (err) => {
                    req.flash("success","Assignment deleted successfully")
                });
            }
            res.redirect("/assignments");
        })
    })
})

// ==================== APPROVAL ROUTES ====================
// View pending approvals
app.get('/approvals',((req,res)=>{
    db.query(
      `SELECT ba.id, s.student_name, b.book_name, ba.assignment_date, ba.approved, ba.approval_date, ba.student_id, ba.book_id 
       FROM book_assignments ba 
       JOIN students s ON ba.student_id = s.id 
       JOIN books b ON ba.book_id = b.id 
       WHERE ba.approved = 0
       ORDER BY ba.assignment_date ASC`,
      (err,rows)=>{
        if(err){
          req.flash("error",err.message);
          res.render("approvals",{data:[]});
        } else {
          res.render("approvals",{data:rows,title:'Library Management System :: Approvals'});
        }
      }
    )
}))

// Approve book assignment
app.get("/approve-assignment/:id",(req,res)=>{
    const today = new Date().toISOString().split('T')[0];
    db.query(
        "UPDATE book_assignments SET approved=1, approval_date=? WHERE id=?",
        [today, req.params.id],
        (err)=>{
            if(err){
                req.flash("error","Assignment not approved");
            } else {
                req.flash("success","Assignment approved successfully");
            }
            res.redirect("/approvals");
        }
    )
})

// ==================== RETURN ROUTES ====================
// View all returns
app.get('/returns',((req,res)=>{
    db.query(
      `SELECT br.id, ba.id as assignment_id, s.student_name, b.book_name, ba.assignment_date, br.return_date, br.condition, ba.student_id, ba.book_id 
       FROM book_returns br 
       JOIN book_assignments ba ON br.assignment_id = ba.id 
       JOIN students s ON ba.student_id = s.id 
       JOIN books b ON ba.book_id = b.id 
       ORDER BY br.return_date DESC`,
      (err,rows)=>{
        if(err){
          req.flash("error",err.message);
          res.render("returns",{data:[]});
        } else {
          res.render("returns",{data:rows,title:'Library Management System :: Book Returns'});
        }
      }
    )
}))

// Return book page
app.get('/return-book',((req,res)=>{
    // Get all active assignments (approved and not yet returned)
    db.query(
      `SELECT ba.id, s.student_name, b.book_name, ba.assignment_date, ba.student_id, ba.book_id 
       FROM book_assignments ba 
       JOIN students s ON ba.student_id = s.id 
       JOIN books b ON ba.book_id = b.id 
       WHERE ba.approved = 1 AND ba.id NOT IN (SELECT assignment_id FROM book_returns)
       ORDER BY ba.assignment_date ASC`,
      (err,assignments)=>{
        res.render("returnbook",{
          assignments: assignments || [],
          title:'Library Management System :: Return Book'
        });
      }
    )
}))

// Insert book return
app.post('/return-book',(req,res)=>{
    const {assignment_id, return_date, condition} = req.body;
    
    // Get book_id from assignment
    db.query("SELECT book_id FROM book_assignments WHERE id=?", [assignment_id], (err, results) => {
        if(err || !results.length) {
            req.flash("error", "Assignment not found");
            return res.redirect("/return-book");
        }
        
        const book_id = results[0].book_id;
        const sql = `INSERT INTO book_returns(assignment_id, return_date, condition) VALUES (?, ?, ?)`;
        
        db.query(sql, [assignment_id, return_date, condition], (err, result) => {
            if(err){
                console.error(err);
                req.flash("error", "Book return cannot be recorded: " + err.message);
                return res.redirect("/return-book");
            }
            
            // Increase available quantity
            db.query("UPDATE books SET available_quantity = available_quantity + 1 WHERE id = ?", [book_id], (err) => {
                req.flash("success", "Book returned successfully");
                res.redirect("/returns");
            });
        });
    });
})

// ==================== SEARCH ROUTES ====================
// Search students
app.post('/search-students',(req,res)=>{
    const searchTerm = '%' + req.body.search + '%';
    db.query(
        "SELECT * FROM students WHERE student_name LIKE ? OR student_id LIKE ? OR email LIKE ? ORDER BY created_at DESC",
        [searchTerm, searchTerm, searchTerm],
        (err,rows)=>{
            if(err){
                req.flash("error",err.message);
                res.render("students",{data:[]});
            } else {
                res.render("students",{data:rows,title:'Library Management System :: Students'});
            }
        }
    )
})

// Search books
app.post('/search-books',(req,res)=>{
    const searchTerm = '%' + req.body.search + '%';
    db.query(
        "SELECT * FROM books WHERE book_name LIKE ? OR author LIKE ? OR isbn LIKE ? OR category LIKE ? ORDER BY created_at DESC",
        [searchTerm, searchTerm, searchTerm, searchTerm],
        (err,rows)=>{
            if(err){
                req.flash("error",err.message);
                res.render("books",{data:[]});
            } else {
                res.render("books",{data:rows,title:'Library Management System :: Books'});
            }
        }
    )
})
 


// create a server using listen method
app.listen(port,()=>{
console.log(`Server is running on http://localhost:${port}`);
});

// connection end  (don't used this )
// db.end();