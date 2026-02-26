# what is mongoDB  ?

  1. MongoDB is a document database. It stores data in a type of JSON format called BSON.
  2. A record in MongoDB is a document, which is a data structure composed of key value pairs similar to the structure of JSON objects.
  3. Records in a MongoDB database are called documents, and the field values may include numbers, strings, booleans, arrays, or even nested documents.

    **examples**

    ```
    {
	title: "Post Title 1",
	body: "Body of post.",
	category: "News",
	likes: 1,
	tags: ["news", "events"],
	date: Date()
    }

    ```

## MongoDB

 1. MongoDB is a document database and can be installed locally or hosted in the cloud.

 2. SQL vs Document Databases

  SQL databases are considered relational databases. They store related data in separate tables. When data is needed, it is queried from multiple tables to join the data back together.

  MongoDB is a document database which is often referred to as a non-relational database. This does not mean that relational data cannot be stored in document databases. It means that relational data is stored differently. A better way to refer to it is as a non-tabular database.

  MongoDB stores data in flexible documents. Instead of having multiple tables you can simply keep all of your related data together. This makes reading your data very fast.

  You can still have multiple groups of data too. In MongoDB, instead of tables these are called collections. 


 3. Local vs Cloud Database

   MongoDB can be installed locally, which will allow you to host your own MongoDB server on your hardware. This requires you to manage your server, upgrades, and any other maintenance.

   You can download and use the MongoDB open source Community Server on your hardware for free.

   However, for this course we are going to use MongoDB Atlas, a cloud database platform. This is much easier than hosting your own local database.

   To be able to experiment with the code examples, you will need access to a MongoDB database.

   Sign up for a free MongoDB Atlas account to get started.  


   **mongoDB atlas setup**

   1. Sign up for a free MongoDB Atlas account to get started.
      
      https://www.mongodb.com/cloud/atlas/register?utm_campaign=w3schools_mdb&utm_source=w3schools&utm_medium=referral

   2. Creating a Cluster

   3. After you have created your account, set up a free "Shared Cluster" then choose your preferred cloud provider and region.

   4. By default, MongoDB Atlas is completely locked down and has no external access.

   5. You will need to set up a user and add your IP address to the list of allowed IP addresses.

   6. Under "Database Access", create a new user and keep track of the username and password.

   7. Next, under "Network Access", add your current IP address to allow access from your computer.


 ## MongoDB Query API

 1. The MongoDB Query API is the way you will interact with your data.

2. The MongoDB Query API can be used in two ways:

    . CRUD Operations
    . Aggregation Pipelines

3. MongoDB Query API Uses

4. You can use the MongoDB Query API to perform:

    1. Adhoc queries with mongosh, Compass, VS Code, or a MongoDB driver for the programming language you use.
    2. Data transformations using aggregation pipelines.
    3. Document join support to combine data from different collections.
    4. Graph and geospatial queries.
    5. Full-text search.
    6. Indexing to improve MongoDB query performance.
    7. Time series analysis.

## MongoDB mongosh Create Database


