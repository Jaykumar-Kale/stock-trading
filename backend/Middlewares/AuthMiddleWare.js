
require("dotenv").config();
const jwt = require("jsonwebtoken");
const { UserModel } = require("../models/UserModel");

module.exports.userVerification = (req, res) => {
  const token = req.cookies.token
  if (!token) {
    return res.json({ status: false })
  }
  const secretKey = process.env.TOKEN_KEY || "secret_key";

  jwt.verify(token, secretKey, async (err, data) => {
    if (err) {
     return res.json({ status: false })
    } else {
      const user = await UserModel.findById(data._id)
      if (user) return res.json({ status: true, user: user.username })
      else return res.json({ status: false })
    }
  })
}