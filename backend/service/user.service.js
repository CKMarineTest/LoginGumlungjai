const sql = require('mssql');
const config = require('../config/Mssql.config');

async function getUserService() {
    try {
      const pool = await sql.connect(config);
      const result = await pool.request().query('SELECT su_id, username, Password, Sr_id, su_firstname, su_lastname FROM SystemUser WHERE Sr_id = 1');
      
      if (result.recordset && result.recordset.length > 0) {
        console.log("Data from database:", result.recordset); 
        return result.recordset;
      } else {
        console.log("No data found for Sr_id = 1");
        return [];  
      }
    } catch (error) {
      console.error('Database Query Error:', error);
      throw error;
    }
  }

module.exports = {
    getUserService,
}