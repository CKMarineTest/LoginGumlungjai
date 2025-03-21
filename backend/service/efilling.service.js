const sql = require("mssql");
const config = require("../config/Mssql.config");

async function getEfillingService() {
  try {
    const pool = await sql.connect(config);
    const result = await pool.request().query("SELECT * FROM efilling");
    return result.recordset;
  } catch (error) {
    console.error(`Database Query Error:`, error);
    throw error;
  }
}

async function getEfillingByIdCardService(idCard) {
  try {
    const pool = await sql.connect(config);
    const result = await pool
      .request()
      .input("idCard", sql.NVarChar, idCard)
      .query("SELECT * FROM efilling WHERE idcard = @idCard");
    return result.recordset;
  } catch (error) {
    console.error(`Datbase Query Error:`, error);
    throw error;
  }
}

async function getActivityService(E_ID) {
  try {
    const pool = await sql.connect(config);
    const result = await pool.request()
      .input('E_ID', sql.Int, E_ID)
      .query(`
        SELECT * FROM Efilling_Activity WHERE E_ID = @E_ID
      `);

    return result.recordset;
  } catch (error) {
    console.error(`Database Query Error:`, error);
    throw error;  
  }
}

module.exports = {
  getEfillingService,
  getEfillingByIdCardService,
  getActivityService,
};
