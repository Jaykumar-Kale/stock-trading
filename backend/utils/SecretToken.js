const jwt = require("jsonwebtoken");

const createSecretToken = (userId) => {
  const secretKey = process.env.TOKEN_KEY || "secret_key";
  
  const token = jwt.sign({ _id: userId }, secretKey, {
    expiresIn: "7d", 
  });
  
  return token;
};

module.exports = { createSecretToken };
