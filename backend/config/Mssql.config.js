"use strict";

const dotenv = require("dotenv");

const config = {
  user: "gumlungjai", // Your SQL Server username
  password: "j4**9c+p", // Your SQL Server password
  server: "192.168.1.38", // Change to your server's address (e.g., 'localhost', '192.168.1.100', or 'your_server_name')
  database: "thegift", // Your database name
  // port: 3307,
  options: {
    encrypt: false, // Set to true if you're using encryption, otherwise false
    trustServerCertificate: true, // Set to true for local dev environments or when using self-signed certs
  },
};

module.exports = config;