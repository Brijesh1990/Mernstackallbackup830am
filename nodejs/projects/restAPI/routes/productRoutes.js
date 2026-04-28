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
