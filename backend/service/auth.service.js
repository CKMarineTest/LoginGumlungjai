// backend/services/auth.service.js
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const config = require("../config/Mssql.config.js");
const sql = require("mssql");

async function authService(username, password) {
  let pool;
  try {
    pool = await sql.connect(config);

    // แก้ไขคำสั่ง SQL โดยใช้ @username แทน @su_id
    const result = await pool
      .request()
      .input("username", sql.NVarChar, username) // ประกาศตัวแปร username ให้ถูกต้อง
      .query(
        "SELECT su_id, username, Password, Sr_id, su_firstname, su_lastname FROM SystemUser WHERE username = @username"
      ); // ใช้ username แทน su_id

    const user = result.recordset[0];

    if (!user) {
      throw new Error("Invalid username or password");
    }

    const isMatch = await bcrypt.compare(password, user.Password);
    if (!isMatch) {
      throw new Error("Invalid username or password");
    }

    const token = jwt.sign(
      {
        su_id: user.su_id,
        username: user.username,
        Sr_id: user.Sr_id,
        su_firstname: user.su_firstname,
        su_lastname: user.su_lastname,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: process.env.JWT_EXPIRES_IN || "1h" }
    );

    return { user, token };
  } catch (error) {
    throw new Error("Login failed: " + error.message);
  } finally {
    if (pool) {
      pool.close();
    }
  }
}

module.exports = {
  authService,
};
