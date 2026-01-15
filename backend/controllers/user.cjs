const mongoose = require("mongoose")

const User = require("../models/user.cjs")

// get all users
const getUsers = async (req, res) => {
  const allUsers = await User.find({})
  res.status(200).json(allUsers)
}

// get one user
const getUser = async (req, res) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
     return res.status(400).json({ error: "Bad request (invalid id)." })
  }

  const user = await User.findById(id)
  if (!user) {
    return res.status(404).json({ error: "User doesn't exist." })
  }

  res.status(200).json(user)
}

// create user
const createUser = async (req, res) => {
  const {
    firstName,
    lastName,
    street,
    city,
    country,
    phone,
    emailAddress,
    salesStatus
  } = req.body

  try {
    const user = await User.create({
      firstName,
      lastName,
      street,
      city,
      country,
      phone,
      emailAddress,
      salesStatus
    })
    res.status(200).json(user)
  } 
  catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// delete user
const deleteUser = async (req, res) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
     return res.status(400).json({ error: "Bad request (invalid id)." })
  }

  const user = await User.findOneAndDelete({ _id: id })
  if (!user) {
    return res.status(404).json({ error: "User doesn't exist." })
  }

  res.status(200).json(user)
};

// update user
const updateUser = async (req, res) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
     return res.status(400).json({ error: "Bad request (invalid id)." })
  }

  const user = await User.findOneAndUpdate({ _id: id }, { ...req.body }, 
    { new: true })
  if (!user) {
    return res.status(404).json({ error: "User doesn't exist." })
  }

  res.status(200).json(user)
}

module.exports = {
   getUsers,
   getUser,
   createUser,
   deleteUser,
   updateUser
}