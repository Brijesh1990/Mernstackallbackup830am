# projects setup

mkdir jwt-crud-api
cd jwt-crud-api
npm init -y


# dependencies 

npm install express mongoose jsonwebtoken bcryptjs dotenv cors
npm install nodemon --save-dev

# environments setups

.env 

PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/jwtcrud
JWT_SECRET=4f9c2a7d8e1b6c3f5a0d9e7c1b2f8a6d3c7e9f1a5b8d2c6e4f0a7b9c1d3e5f6


# explain all dependencies 

# 1. express
👉 What it is:

Express.js is a minimal and fast web framework for Node.js used to build APIs and web applications.

👉 Why we use it:
Create server
Handle routes (GET, POST, PUT, DELETE)
Middleware support
👉 Example:
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});
👉 Key Features:
Routing system
Middleware support
Request & response handling


# 🍃 2. mongoose

👉 What it is:

Mongoose is an ODM (Object Data Modeling) library for MongoDB.

👉 Why we use it:
Connect Node.js with MongoDB
Create schemas & models
Perform CRUD operations easily
👉 Example:
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/test");

const userSchema = new mongoose.Schema({
  name: String
});

const User = mongoose.model("User", userSchema);
👉 Key Features:
Schema validation
Easy queries (find, save, update)
Middleware hooks (pre, post)


# 🔐 3. jsonwebtoken


👉 What it is:

Library used to create and verify JWT tokens.

👉 Why we use it:
Authentication
Secure APIs
Stateless login system
👉 How it works:
User logs in
Server generates token
Client sends token in requests
Server verifies token
👉 Example:
const jwt = require("jsonwebtoken");

const token = jwt.sign({ id: 1 }, "secretkey", { expiresIn: "1h" });

const decoded = jwt.verify(token, "secretkey");
👉 Key Features:
Token signing
Token verification
Expiration support
🔑 4. bcryptjs

👉 What it is:

Library used for hashing passwords.

👉 Why we use it:
Never store plain passwords
Protect user data
Secure authentication
👉 Example:
const bcrypt = require("bcryptjs");

const hashed = await bcrypt.hash("123456", 10);

const isMatch = await bcrypt.compare("123456", hashed);
👉 Key Features:
Salt + hash
Secure password comparison
Prevents hacking attempts

# 🌍 5. dotenv

👉 What it is:

Loads environment variables from a .env file.

👉 Why we use it:
Keep secrets safe (DB URL, JWT secret)
Avoid hardcoding sensitive data
👉 Example:
require("dotenv").config();

console.log(process.env.JWT_SECRET);
👉 Example .env:
PORT=5000
JWT_SECRET=mysecret


# 🔄 6. cors

👉 What it is:

CORS = Cross-Origin Resource Sharing

👉 Why we use it:
Allow frontend (React, Angular) to call backend
Avoid browser blocking requests
👉 Example:
const cors = require("cors");
app.use(cors());
👉 Problem it solves:

Without CORS:

Access blocked by browser ❌

With CORS:

Request allowed ✅


# ⚙️ 7. nodemon (Dev Dependency)

👉 What it is:

Automatically restarts server when code changes.

👉 Why we use it:
No need to restart manually
Faster development
👉 Example:
npx nodemon server.js
🧠 How They Work Together (Flow)
🔁 Full API Flow:
Express → Handles routes
Mongoose → Talks to MongoDB
bcryptjs → Hashes password
jsonwebtoken → Creates token
dotenv → Stores secrets
cors → Allows frontend access
nodemon → Auto-restart server


🔥 Dependency	Role

express  : 	Restaurant manager (handles requests)

mongoose  :	Waiter (talks to database)

bcryptjs  :	Lock system (protects passwords)

jsonwebtoken: 	Entry pass (authentication token)

dotenv :	Safe locker (stores secrets)

cors   : 	Gatekeeper (allows outside requests)

nodemon	 :  Auto-reloader (developer helper)

# folder structures 

jwt-crud-api/
│── models/
│   ├── User.js
│   ├── Product.js
│
│── routes/
│   ├── authRoutes.js
│   ├── productRoutes.js
│
│── middleware/
│   ├── authMiddleware.js
│
│── .env
│── server.js


# Generated 64-character secure secret

 bash 

 JWT_SECRET=4f9c2a7d8e1b6c3f5a0d9e7c1b2f8a6d3c7e9f1a5b8d2c6e4f0a7b9c1d3e5f6


# server.js

```
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/products", require("./routes/productRoutes"));

// DB Connect
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});

```

# User Model (models/User.js)

```
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String
});

module.exports = mongoose.model("User", userSchema);

```

# Product Model (models/Product.js)

```
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

module.exports = mongoose.model("Product", productSchema);

```


# Auth Middleware (middleware/authMiddleware.js) 

```
const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const token = req.header("Authorization");

  if (!token) return res.status(401).json({ msg: "No token" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Invalid token" });
  }
};


```


# Auth Routes (routes/authRoutes.js)

```

const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// REGISTER
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ msg: "User exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    user = new User({ name, email, password: hashedPassword });
    await user.save();

    res.json({ msg: "User Registered" });
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "Invalid Email" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Wrong Password" });

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ token });
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

module.exports = router;


```


# Product Routes (routes/productRoutes.js)

```
const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const auth = require("../middleware/authMiddleware");

// CREATE
router.post("/", auth, async (req, res) => {
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    user: req.user.id
  });

  await product.save();
  res.json(product);
});

// READ ALL
router.get("/", auth, async (req, res) => {
  const products = await Product.find({ user: req.user.id });
  res.json(products);
});

// UPDATE
router.put("/:id", auth, async (req, res) => {
  const updated = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
});

// DELETE
router.delete("/:id", auth, async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted" });
});

module.exports = router;

```

# run server 

```
npm nodemon server.js

```

# Postman Testing

```
1. Register

POST http://localhost:5000/api/auth/register
Body (JSON):
{
  "name": "Brijesh",
  "email": "test@mail.com",
  "password": "123456"
}


2. Login

POST http://localhost:5000/api/auth/login

3. Add Product

POST http://localhost:5000/api/products
Headers:
Authorization: YOUR_TOKEN

body :

{
  "name": "Laptop",
  "price": 50000
}

4. Get Products

GET http://localhost:5000/api/products
Authorization: YOUR_TOKEN


5. update products

PUT http://localhost:5000/api/products/:id


6. delete products 

DELETE http://localhost:5000/api/products/:id

7. 


```