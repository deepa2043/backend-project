const express = require("express");
const router = express.Router();

const {
  getUsers,
  updateUser,
  deleteUser
} = require("../controllers/userController");

// GET all users
router.get("/", getUsers);

// UPDATE user
router.put("/:id", updateUser);

// DELETE user
router.delete("/:id", deleteUser);

module.exports = router;