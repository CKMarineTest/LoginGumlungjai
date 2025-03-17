const sql = require('mssql');
const config = require("../config/Mssql.config");

async function getEfilling() {
  try {
    const pool = await sql.connect(config);
    const result = await pool.request().query("SELECT * FROM efilling");
    return result.recordset; 
  } catch (error) {
    console.error(`Database Query Error:`, error);
    throw error;
  }
}

async function getEfillingByIdCard(idCard) {
  try {
    const pool = await sql.connect(config);
    const result = await pool.request()
      .input('idCard', sql.NVarChar, idCard)
      .query("SELECT * FROM efilling WHERE idcard = @idCard");
    return result.recordset;
  }catch(error) {
    console.error(`Datbase Query Error:`, error);
    throw error
  }
}

async function getEfillingPhoto(idCard) {
  try {
    const pool = await sql.connect(config);
    const result = await pool.request()
      .input('idCard', sql.NVarChar, idCard)
      .query('SELECT photo FROM efilling WHERE idcard = @idCard');
    return result.recordset;
  }catch(error){
    console.error(`Photo Query Error:`, error);
    throw error;
  }
}

module.exports = { getEfilling, getEfillingByIdCard, getEfillingPhoto };
