# Library Management System - Architecture & Documentation

## System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                     WEB BROWSER (Client)                        │
│                                                                   │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │           EJS Templates (Frontend Views)                  │   │
│  │  - index.ejs          (Home Page)                         │   │
│  │  - dashboard.ejs      (Statistics & Recent Activity)      │   │
│  │  - students.ejs       (Student List)                      │   │
│  │  - books.ejs          (Book Inventory)                    │   │
│  │  - assignments.ejs    (Book Assignments)                  │   │
│  │  - approvals.ejs      (Pending Approvals)                 │   │
│  │  - returns.ejs        (Book Returns)                      │   │
│  └──────────────────────────────────────────────────────────┘   │
│                           ↓                                       │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │            CSS & JavaScript (Styling & UX)               │   │
│  │  - style.css          (Responsive Design)                │   │
│  │  - script.js          (Client-side Logic)                │   │
│  └──────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
                           ↓ (HTTP Request)
┌─────────────────────────────────────────────────────────────────┐
│                    NODE.JS SERVER (server.js)                    │
│                                                                   │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │              Express.js Framework                        │   │
│  │  - Routes for all CRUD operations                        │   │
│  │  - Middleware for session & flash messages               │   │
│  │  - Request/Response handling                             │   │
│  └──────────────────────────────────────────────────────────┘   │
│                                                                   │
│  Route Handlers:                                                 │
│  ├─ / (Home)                                                    │
│  ├─ /dashboard (Statistics)                                    │
│  ├─ /students, /add-student, /edit-student, /delete-student   │
│  ├─ /books, /add-book, /edit-book, /delete-book              │
│  ├─ /assignments, /assign-book, /delete-assignment           │
│  ├─ /approvals, /approve-assignment                          │
│  ├─ /returns, /return-book                                   │
│  └─ /search-students, /search-books                          │
│                                                                   │
│  Middleware:                                                     │
│  ├─ bodyParser (Parse form data)                               │
│  ├─ session (Manage user sessions)                             │
│  └─ flash (Display notifications)                              │
└─────────────────────────────────────────────────────────────────┘
                           ↓ (MySQL2 Driver)
┌─────────────────────────────────────────────────────────────────┐
│                    MySQL Database                                │
│                                                                   │
│  Tables:                                                         │
│  ├─ students (ID, Name, StudentID, Email, Phone)              │
│  ├─ books (ID, Name, Author, ISBN, Category, Qty, Available) │
│  ├─ book_assignments (ID, StudentID, BookID, Date, Approved) │
│  └─ book_returns (ID, AssignmentID, Date, Condition)         │
│                                                                   │
│  Features:                                                       │
│  ├─ Foreign Keys (Relationship Integrity)                       │
│  ├─ Unique Constraints (Prevent Duplicates)                     │
│  ├─ Timestamps (Track Creation & Updates)                       │
│  └─ Auto-increment IDs (Primary Keys)                           │
└─────────────────────────────────────────────────────────────────┘
```

## Data Flow Diagram

```
USER INTERACTION
       ↓
   Browser/Form
       ↓
[Request → Server]
       ↓
Express Router (Matches Route)
       ↓
Route Handler (Process Request)
       ↓
    ├─ Read Data: Query Database
    ├─ Create: Insert New Record
    ├─ Update: Modify Existing Record
    └─ Delete: Remove Record
       ↓
  MySQL Database
       ↓
[Response ← Server]
       ↓
EJS Template (Render HTML)
       ↓
Browser (Display Page)
       ↓
Flash Message (Success/Error)
```

## Student Management Flow

```
┌─────────────────┐
│   Home Page     │
└────────┬────────┘
         │
         ↓
    ┌────────────────┐
    │ Students Page  │
    └────┬───────────┘
         │
    ┌────┴────────────────────────┐
    │                             │
    ↓                             ↓
[View All]          [Add New Student]
    │                             │
    ├─ List Students             ├─ Fill Form
    ├─ Search Students           ├─ POST /add-student
    ├─ Click Edit                └─ INSERT into DB
    └─ Click Delete                  │
    │ ↓                              ↓
    └─[Edit Student]          [Success Message]
       ├─ Display Form              │
       ├─ Pre-fill Data             ↓
       ├─ Modify Details        [Redirect to List]
       ├─ POST /update-student/:id
       └─ UPDATE in DB
```

## Book Assignment & Return Flow

```
┌─────────────────────────────┐
│   Add Book to Inventory     │
│   (Books → Add Book)        │
└────────┬────────────────────┘
         │
         ↓
┌─────────────────────────────┐
│   Assign Book to Student    │
│   (Assignments → Assign)    │
│   ├─ Select Student         │
│   ├─ Select Book            │
│   └─ Set Date               │
└────────┬────────────────────┘
         │
         ↓
┌─────────────────────────────┐
│   BOOK_ASSIGNMENTS Table    │
│   approved = 0 (Pending)    │
│   available_qty decreased   │
└────────┬────────────────────┘
         │
         ↓
┌─────────────────────────────┐
│   Approvals Page            │
│   Review Pending Requests   │
│   Click Approve             │
└────────┬────────────────────┘
         │
         ↓
┌─────────────────────────────┐
│   BOOK_ASSIGNMENTS Table    │
│   approved = 1              │
│   approval_date set         │
└────────┬────────────────────┘
         │
         ↓
┌─────────────────────────────┐
│   Return Book               │
│   (Returns → Record Return) │
│   ├─ Select Assignment      │
│   ├─ Set Return Date        │
│   └─ Set Book Condition     │
└────────┬────────────────────┘
         │
         ↓
┌─────────────────────────────┐
│   BOOK_RETURNS Table        │
│   Record Inserted           │
│   available_qty increased   │
└─────────────────────────────┘
```

## Database Schema or Data dictionary

### students Table
```
┌─────────┬─────────────┬──────────────────┐
│ Column  │ Type        │ Attributes       │
├─────────┼─────────────┼──────────────────┤
│ id      │ INT         │ PK, Auto Incr    │
│ student │ VARCHAR(255)│ NOT NULL         │
│ name    │             │                  │
├─────────┼─────────────┼──────────────────┤
│ student │ VARCHAR(100)│ NOT NULL, UNIQUE │
│ id      │             │                  │
├─────────┼─────────────┼──────────────────┤
│ email   │ VARCHAR(255)│ Nullable         │
├─────────┼─────────────┼──────────────────┤
│ phone   │ VARCHAR(20) │ Nullable         │
├─────────┼─────────────┼──────────────────┤
│ created │ TIMESTAMP   │ Default NOW      │
│ _at     │             │                  │
└─────────┴─────────────┴──────────────────┘
```

### books Table
```
┌───────────────────┬─────────────┬──────────────────┐
│ Column            │ Type        │ Attributes       │
├───────────────────┼─────────────┼──────────────────┤
│ id                │ INT         │ PK, Auto Incr    │
│ book_name         │ VARCHAR(255)│ NOT NULL         │
│ author            │ VARCHAR(255)│ Nullable         │
│ isbn              │ VARCHAR(100)│ UNIQUE, Nullable │
│ category          │ VARCHAR(100)│ Nullable         │
│ quantity          │ INT         │ Default 0        │
│ available_quantity│ INT         │ Default 0        │
│ created_at        │ TIMESTAMP   │ Default NOW      │
└───────────────────┴─────────────┴──────────────────┘
```

### book_assignments Table
```
┌────────────────┬─────────────┬──────────────────┐
│ Column         │ Type        │ Attributes       │
├────────────────┼─────────────┼──────────────────┤
│ id             │ INT         │ PK, Auto Incr    │
│ student_id     │ INT         │ FK → students    │
│ book_id        │ INT         │ FK → books       │
│ assignment_date│ DATE        │ NOT NULL         │
│ approved       │ INT         │ 0 or 1, Default 0│
│ approval_date  │ DATE        │ Nullable         │
│ approved_by    │ VARCHAR(255)│ Nullable         │
│ created_at     │ TIMESTAMP   │ Default NOW      │
└────────────────┴─────────────┴──────────────────┘
```

### book_returns Table
```
┌──────────────┬─────────────┬──────────────────┐
│ Column       │ Type        │ Attributes       │
├──────────────┼─────────────┼──────────────────┤
│ id           │ INT         │ PK, Auto Incr    │
│ assignment_id│ INT         │ FK →assignments  │
│ return_date  │ DATE        │ Nullable         │
│ condition    │ VARCHAR(100)│ Nullable         │
│ created_at   │ TIMESTAMP   │ Default NOW      │
└──────────────┴─────────────┴──────────────────┘
```

## URL Routes Map

```
/                           → Home Page
/dashboard                  → Dashboard with Statistics

STUDENTS:
/students                   → View All Students
/add-student                → Add Student Form
/add-student (POST)         → Create Student
/edit-student/:id           → Edit Student Form
/update-student/:id (POST)  → Update Student
/delete-student/:id         → Delete Student
/search-students (POST)     → Search Students

BOOKS:
/books                      → View All Books
/add-book                   → Add Book Form
/add-book (POST)            → Create Book
/edit-book/:id              → Edit Book Form
/update-book/:id (POST)     → Update Book
/delete-book/:id            → Delete Book
/search-books (POST)        → Search Books

ASSIGNMENTS:
/assignments                → View All Assignments
/assign-book                → Assign Book Form
/assign-book (POST)         → Create Assignment
/delete-assignment/:id      → Delete Assignment

APPROVALS:
/approvals                  → View Pending Approvals
/approve-assignment/:id     → Approve Assignment

RETURNS:
/returns                    → View All Returns
/return-book                → Record Return Form
/return-book (POST)         → Create Return
```

## Key Concepts

### 1. Automatic Quantity Management
- When a book is assigned: `available_quantity--`
- When a book is returned: `available_quantity++`
- Prevents negative inventory

### 2. Approval Workflow
- Initial assignment status: `approved = 0`
- After approval: `approved = 1` and `approval_date` is set
- Only approved assignments show on dashboard

### 3. Book Condition Tracking
- Options: Excellent, Good, Fair, Damaged, Lost
- Recorded when book is returned
- Helps identify damaged inventory

### 4. Foreign Key Relationships
- Prevents orphaned records
- Cascading deletes remove related records
- Maintains data integrity

### 5. Search Functionality
- Multi-field search using LIKE operator
- Case-insensitive matching
- Partial text matching supported

---

## Development Tips

1. **Testing New Features**: Use the dashboard to verify statistics are updating correctly
2. **Database Debugging**: Check MySQL logs for query errors
3. **Frontend Debugging**: Use browser F12 developer tools
4. **Form Validation**: Check console for validation messages
5. **Session Testing**: Use browser tools to inspect cookies

---

**Document Version**: 1.0  
**Last Updated**: January 2026  
**Created For**: Library Management System v1.0
