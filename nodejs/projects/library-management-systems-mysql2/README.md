# Library Management System

A comprehensive Node.js and MySQL2 based Library Management System with features for managing students, books, assignments, approvals, and returns.

## Features

### 1. **Dashboard**
   - Total students count
   - Total books count
   - Available books count
   - Pending approvals count
   - Recent book assignments display

### 2. **Student Management**
   - Add new students
   - View all students with details
   - Edit student information
   - Delete students
   - Search students by name, ID, or email

### 3. **Book Management**
   - Add new books with title, author, ISBN, category
   - Track quantity and available quantity
   - View all books with inventory status
   - Edit book details
   - Delete books
   - Search books by name, author, ISBN, or category

### 4. **Book Assignment**
   - Assign books to students
   - Track assignment dates
   - Monitor available book quantities
   - Automatic quantity management
   - Delete assignments

### 5. **Approval System**
   - View pending book approvals
   - Approve book assignments for students
   - Track approval dates

### 6. **Book Returns**
   - Record book returns from students
   - Track return dates
   - Monitor book condition (Excellent, Good, Fair, Damaged, Lost)
   - Automatic quantity restoration

### 7. **Search & Filter**
   - Quick search for students
   - Quick search for books
   - Multiple search criteria

## Technology Stack

- **Backend**: Node.js with Express.js
- **Database**: MySQL2
- **Frontend**: EJS (Embedded JavaScript Templating)
- **Session Management**: express-session
- **Notifications**: connect-flash
- **Styling**: Custom CSS

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MySQL Server (running)
- npm (Node Package Manager)

### Setup Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Create Database**
   - Open MySQL client
   - Create a new database:
   ```sql
   CREATE DATABASE library_management_system;
   ```

3. **Configure Database Connection**
   - Edit `server.js`
   - Update database connection details:
   ```javascript
   const db = mysql2.createConnection({
       host: 'localhost',
       user: 'root',
       password: 'your_password',
       database: 'library_management_system'
   });
   ```

4. **Start the Server**
   ```bash
   npm start
   ```
   - Server will run on `http://localhost:3000`

## Database Schema

### Tables

#### 1. **students**
- id (INT, Primary Key, Auto Increment)
- student_name (VARCHAR 255)
- student_id (VARCHAR 100, Unique)
- email (VARCHAR 255)
- phone (VARCHAR 20)
- created_at (TIMESTAMP)

#### 2. **books**
- id (INT, Primary Key, Auto Increment)
- book_name (VARCHAR 255)
- author (VARCHAR 255)
- isbn (VARCHAR 100, Unique)
- category (VARCHAR 100)
- quantity (INT)
- available_quantity (INT)
- created_at (TIMESTAMP)

#### 3. **book_assignments**
- id (INT, Primary Key, Auto Increment)
- student_id (INT, Foreign Key)
- book_id (INT, Foreign Key)
- assignment_date (DATE)
- approved (INT, 0 or 1)
- approval_date (DATE)
- approved_by (VARCHAR 255)
- created_at (TIMESTAMP)

#### 4. **book_returns**
- id (INT, Primary Key, Auto Increment)
- assignment_id (INT, Foreign Key)
- return_date (DATE)
- condition (VARCHAR 100)
- created_at (TIMESTAMP)

## Routes

### Home & Dashboard
- `GET /` - Home page
- `GET /dashboard` - Dashboard with statistics

### Student Management
- `GET /students` - View all students
- `GET /add-student` - Add student page
- `POST /add-student` - Create new student
- `GET /edit-student/:id` - Edit student page
- `POST /update-student/:id` - Update student
- `GET /delete-student/:id` - Delete student
- `POST /search-students` - Search students

### Book Management
- `GET /books` - View all books
- `GET /add-book` - Add book page
- `POST /add-book` - Create new book
- `GET /edit-book/:id` - Edit book page
- `POST /update-book/:id` - Update book
- `GET /delete-book/:id` - Delete book
- `POST /search-books` - Search books

### Book Assignments
- `GET /assignments` - View all assignments
- `GET /assign-book` - Assign book page
- `POST /assign-book` - Create assignment
- `GET /delete-assignment/:id` - Delete assignment

### Approvals
- `GET /approvals` - View pending approvals
- `GET /approve-assignment/:id` - Approve assignment

### Book Returns
- `GET /returns` - View all returns
- `GET /return-book` - Record return page
- `POST /return-book` - Create return record

## Usage

### Adding a Student
1. Navigate to Students → Add Student
2. Fill in student details
3. Click "Add Student"

### Adding a Book
1. Navigate to Books → Add Book
2. Enter book details (name, author, ISBN, category, quantity)
3. Click "Add Book"

### Assigning a Book
1. Navigate to Assignments → Assign Book
2. Select student and book
3. Choose assignment date
4. Click "Assign Book"

### Approving Assignment
1. Navigate to Approvals
2. View pending requests
3. Click "Approve" to approve

### Recording Return
1. Navigate to Returns → Record Return
2. Select the assignment
3. Enter return date and book condition
4. Click "Record Return"

## File Structure

```
library-management-systems-mysql2/
├── server.js                 # Main server file
├── package.json             # Dependencies
├── views/
│   ├── index.ejs           # Home page
│   ├── dashboard.ejs       # Dashboard
│   ├── students.ejs        # Students list
│   ├── addstudent.ejs      # Add student form
│   ├── editstudent.ejs     # Edit student form
│   ├── books.ejs           # Books list
│   ├── addbook.ejs         # Add book form
│   ├── editbook.ejs        # Edit book form
│   ├── assignments.ejs     # Assignments list
│   ├── assignbook.ejs      # Assign book form
│   ├── approvals.ejs       # Approvals list
│   ├── returns.ejs         # Returns list
│   ├── returnbook.ejs      # Record return form
│   ├── pagenotfound.ejs    # 404 page
│   └── partials/
│       ├── head.ejs        # HTML head
│       └── navigation.ejs  # Navigation bar
├── public/
│   ├── css/
│   │   └── style.css       # Custom styles
│   ├── js/
│   │   └── script.js       # Client-side scripts
│   └── images/
└── dbbackup/               # Database backups
```

## Key Features Details

### Dashboard Statistics
- Real-time count of students and books
- Availability tracking
- Recent assignments monitoring
- Pending approvals tracking

### Automatic Quantity Management
- When a book is assigned, available quantity decreases
- When a book is returned, available quantity increases
- Prevents over-assignment

### Flash Messages
- Success messages for completed actions
- Error messages for failed operations
- Dismissible alerts

### Search Functionality
- Fast multi-field search
- Case-insensitive search
- Partial match support

## Error Handling

The system includes comprehensive error handling:
- Database connection errors
- Invalid input validation
- Duplicate entry prevention
- Transaction error management

## Future Enhancements

- User authentication and authorization
- Fine management for overdue returns
- Book reservations
- Email notifications
- Student history reports
- Library analytics dashboard

## Support

For issues or questions, please check:
1. Database connection in `server.js`
2. MySQL server is running
3. Database exists with correct name
4. All required tables are created

## License

This project is open source and available for educational purposes.
