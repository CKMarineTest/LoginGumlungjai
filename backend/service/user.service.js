const sql = require("mssql");
const config = require("../config/Mssql.config");

async function getUserService() {
  try {
    const pool = await sql.connect(config);
    const result = await pool
      .request()
      .query(
        "SELECT su_id, card_id, username, Password, Sr_id, su_firstname, su_lastname, su_phone FROM SystemUser WHERE Sr_id = 4"
      );

    if (result.recordset && result.recordset.length > 0) {
      console.log("Data from database:", result.recordset);
      return result.recordset;
    } else {
      console.log("No data found for Sr_id = 4");
      return [];
    }
  } catch (error) {
    console.error("Database Query Error:", error);
    throw error;
  }
}

async function getAdminService() {
  try {
    const pool = await sql.connect(config);
    const result = await pool
      .request()
      .query("SELECT su_id, card_id, username, Password, Sr_id, su_firstname, su_lastname FROM SystemUser WHERE Sr_id = 1");

    if(result.recordset && result.recordset.length > 0) {
      console.log("Data from database:", result.recordset);
      return result.recordset;
    }else {
      console.log("No data found for Sr_id = 1");
      return [];
    }
  }catch(error) {
    console.error("Database Query Error:", error);
    throw error;
  }
}

async function deleteUserService(su_id) {
  try {
    const pool = await sql.connect(config);
    const result = await pool
      .request()
      .input("su_id", sql.Int, su_id)  // Changed e_id to su_id
      .query("DELETE FROM SystemUser WHERE su_id = @su_id");

    if (result.rowsAffected && result.rowsAffected.length > 0) {
      console.log("Data deleted from database:", result.rowsAffected);
      return result.rowsAffected;
    }
  } catch (error) {
    console.error("Database Query Error:", error);
    throw error;
  }
}

module.exports = {
  getUserService,
  getAdminService,
  deleteUserService
};
