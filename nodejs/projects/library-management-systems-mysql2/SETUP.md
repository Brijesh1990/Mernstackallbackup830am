# Library Management System - Quick Start Guide

## Prerequisites
- Node.js installed on your system
- MySQL Server installed and running
- Git (optional)

## Step 1: Create Database

Open MySQL Command Line or MySQL Workbench and run:

```sql
CREATE DATABASE library_management_system;
```

## Step 2: Install Dependencies

Navigate to the project directory and run:

```bash
npm install
```

This will install:
- express
- mysql2
- ejs
- express-session
- connect-flash
- body-parser
- nodemon

## Step 3: Update Database Configuration

Open `server.js` and ensure the database connection details match your MySQL setup:

```javascript
const db = mysql2.createConnection({
    host: 'localhost',      // Change if using different host
    user: 'root',           // Your MySQL username
    password: 'admin',      // Your MySQL password
    database: 'library_management_system'
});
```

## Step 4: Start the Server

Run the following command:

```bash
npm start
```

You should see:
```
Connected to database
Table created or already exists
Server is running on http://localhost:3000
```

## Step 5: Access the Application

Open your web browser and navigate to:

```
http://localhost:3000
```

## Features Available

### Home Page (http://localhost:3000/)
- Overview of system features
- Quick links to main modules

### Dashboard (http://localhost:3000/dashboard)
- View statistics: Total Students, Total Books, Available Books, Pending Approvals
- Recent book assignments

### Students Management (http://localhost:3000/students)
- Add new students
- View all students
- Edit student information
- Delete students
- Search students

### Books Management (http://localhost:3000/books)
- Add new books
- View all books with quantity tracking
- Edit book details
- Delete books
- Search books

### Book Assignments (http://localhost:3000/assignments)
- Assign books to students
- View all assignments
- Delete assignments

### Approvals (http://localhost:3000/approvals)
- View pending approvals
- Approve book assignments

### Book Returns (http://localhost:3000/returns)
- Record book returns
- View return history
- Track book condition

## Default Login

The system uses MySQL with default credentials:
- Username: root
- Password: admin

Change these in `server.js` if your MySQL has different credentials.

## Troubleshooting

### "Error connecting to database"
- Ensure MySQL Server is running
- Check database credentials in server.js
- Verify database name is correct

### "Cannot find module"
- Run `npm install` again
- Check that all dependencies installed without errors

### Port 3000 already in use
- Change the port in server.js: `const port = 3001;`
- Or kill the process using port 3000

## File Structure

```
project-root/
├── server.js                    # Main server file (all routes)
├── package.json                 # Dependencies
├── README.md                     # Full documentation
├── SETUP.md                      # This file
├── views/
│   ├── index.ejs               # Home page
│   ├── dashboard.ejs           # Dashboard
│   ├── students.ejs            # Students list
│   ├── addstudent.ejs          # Add student form
│   ├── editstudent.ejs         # Edit student form
│   ├── books.ejs               # Books list
│   ├── addbook.ejs             # Add book form
│   ├── editbook.ejs            # Edit book form
│   ├── assignments.ejs         # Assignments list
│   ├── assignbook.ejs          # Assign book form
│   ├── approvals.ejs           # Approvals list
│   ├── returns.ejs             # Returns list
│   ├── returnbook.ejs          # Record return form
│   ├── pagenotfound.ejs        # 404 page
│   └── partials/
│       ├── head.ejs            # HTML head section
│       └── navigation.ejs      # Navigation bar
├── public/
│   ├── css/
│   │   └── style.css           # Main stylesheet
│   ├── js/
│   │   └── script.js           # Client-side scripts
│   ├── images/                 # Image files
│   └── fonts/                  # Font files
└── dbbackup/                    # Database backups directory
```

## Database Tables Created Automatically

The system automatically creates 4 tables:

1. **students** - Stores student information
2. **books** - Stores book inventory
3. **book_assignments** - Tracks book assignments to students
4. **book_returns** - Records book returns with condition

All tables are created automatically when you first run the server.

## Next Steps

1. Add some students (go to Students → Add Student)
2. Add some books (go to Books → Add Book)
3. Assign books to students (go to Assignments → Assign Book)
4. Approve assignments (go to Approvals)
5. Record returns (go to Returns → Record Return)

## Support & Issues

If you encounter any issues:

1. Check the browser console (F12) for JavaScript errors
2. Check the terminal for server errors
3. Verify MySQL connection details
4. Ensure all files are in the correct directories
5. Review the README.md for more detailed information

## Development Mode

The system uses nodemon for development, which automatically restarts the server when files change. Simply save your changes and the server will reload automatically.

To stop the server, press `Ctrl + C` in the terminal.

---

**Happy Library Managing! 📚**
