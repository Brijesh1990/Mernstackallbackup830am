const express=require('express');
const app=express();
const port=3000;
// create mysql2 connection
const mysql2=require('mysql2');
const db=mysql2.createConnection({
    host:'localhost',
    user:'root',
    password:'admin',
    database:'taskmanager_app'
});

// check connection is stablished or not
db.connect((err)=>{
    if(err){
        console.error('Error connecting to database:',err);
        return;
    }
    console.log('Connected to database');
});

// create a tables 
// const createTableQuery=`CREATE TABLE IF NOT EXISTS tasks (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     title VARCHAR(255) NOT NULL,
//     description TEXT,
//     status VARCHAR(50) DEFAULT 'pending',
//     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// )`; 
// db.query(createTableQuery,(err,result)=>{
//     if(err){
//         console.error('Error creating table:',err);
//         return;
//     }
//     console.log('Table created or already exists');

// });


//create table country
// const createTableQuery=`CREATE TABLE IF NOT EXISTS country (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     name VARCHAR(255) NOT NULL
// )`; 
// db.query(createTableQuery,(err,result)=>{
//     if(err){    
//         console.error('Error creating table:',err);
//         return;
//     }
//     console.log('Table created or already exists');
// });
    
// create table contact 
// const createTableQuery=`CREATE TABLE IF NOT EXISTS contact (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     name VARCHAR(255) NOT NULL,
//     email VARCHAR(255) NOT NULL,
//     subject VARCHAR(255) NOT NULL,
//     phone VARCHAR(20),
//     message TEXT
// )`;
// db.query(createTableQuery,(err,result)=>{
//     if(err){
//         console.error('Error creating table:',err);
//         return;
//     }
//     console.log('Table created or already exists');
// });


// create a insert query
// const insertQuery=`INSERT INTO contact (name,email,subject,phone,message) VALUES ?`;
// const values=[
//     ['John Doe','brijesh@gmail.com','Inquiry','1234567890','Hello, I have a question about your services.'],
//     ['Jane Smith','milan@gmail.com','Feedback','0987654321','Great website! Very user-friendly.']
// ];
// db.query(insertQuery,[values],(err,result)=>{
//     if(err){
//         console.error('Error inserting data:',err);
//         return;
//     }
//     console.log('Data inserted successfully, ID:',result.insertId);
// });



// create to select all data from contact table
// const selectQuery=`SELECT * FROM contact`;
// db.query(selectQuery,(err,results)=>{
//     if(err){
//         console.error('Error fetching data:',err);
//         return;
//     }
//     console.log('Data fetched successfully:',results);
// });


// const selectQuery=`SELECT * FROM contact where id=2`;
// db.query(selectQuery,(err,results)=>{
//     if(err){
//         console.error('Error fetching data:',err);
//         return;
//     }
//     console.log('Data fetched successfully:',results);
// });


// create a update data from contact table 
// const updateQuery=`UPDATE contact SET name=? WHERE id=?`;
// const newName='milan patel';
// const contactId=2;
// db.query(updateQuery,[newName,contactId],(err,result)=>{
//     if(err){
//         console.error('Error updating data:',err);
//         return;
//     }
//     console.log('Data updated successfully, Affected Rows:',result.affectedRows);
// });


// const updateQuery=`UPDATE contact SET name='brijesh' WHERE id=1`;
// db.query(updateQuery,(err,result)=>{
//     if(err){
//         console.error('Error updating data:',err);
//         return;
//     }   
//     console.log('Data updated successfully, Affected Rows:',result.affectedRows);
// });


// create a delete query 
// const deleteQuery=`DELETE FROM contact WHERE id=1`;
// db.query(deleteQuery,(err,result)=>{
//     if(err){
//         console.error('Error deleting data:',err);
//         return;
//     }
//     console.log('Data deleted successfully, Affected Rows:',result.affectedRows);
// });

// create a query to count total contacts
// const countQuery=`SELECT COUNT(*) AS totalContactsData FROM contact`;
// db.query(countQuery,(err,results)=>{
//     if(err){
//         console.error('Error counting contacts:',err);
//         return;
//     }
//     console.log('Total Contacts:',results[0].totalContactsData);
// });

// create a insert query

// create a server using listen method
app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});

// connection end 
db.end();