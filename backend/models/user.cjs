const mongoose = require("mongoose")

const Schema = mongoose.Schema

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  street: {
    type: String,
    required: false,
  },
  city: {
    type: String,
    required: false,
  },
  country: {
    type: String,
    required: false,
  },
  phone: {
    type: String,
    required: false,
  },
  emailAddress: {
    type: String,
    required: true,
  },
  salesStatus: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model("User", userSchema)