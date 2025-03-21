const sql = require('mssql');
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
    const result = await pool.request()
      .input('idCard', sql.NVarChar, idCard)
      .query("SELECT * FROM efilling WHERE idcard = @idCard");
    return result.recordset;
  }catch(error) {
    console.error(`Datbase Query Error:`, error);
    throw error
  }
}

async function getEfilling_Activity(E_ID) {
  try {
    const pool = await sql.connect(config);
    const result = await pool.request()
      .input('E_ID', sql.NVarChar, E_ID)
      .query("SELECT A_ID,Activity_Name,E_ID,Active,A_ImgPath1,A_ImgPath2,A_ImgPath3,A_ImgPath4,A_ImgPath5 FROM Efilling_Activity where E_ID = @E_ID");
    return result.recordset;
  }catch(error) {
    console.error(`Datbase Query Error:`, error);
    throw error
  }
}

async function getEfilling_certificate(E_ID) {
  try {
    const pool = await sql.connect(config);
    const result = await pool.request()
      .input('E_ID', sql.NVarChar, E_ID)
      .query("SELECT  cr_id,cername,c_level,filepath,E_ID FROM Efilling_certificate where E_ID = @E_ID");
    return result.recordset;
  }catch(error) {
    console.error(`Datbase Query Error:`, error);
    throw error
  }
}

async function getefilling_family_medical_history(E_ID) {
  try {
    const pool = await sql.connect(config);
    const result = await pool.request()
      .input('E_ID', sql.NVarChar, E_ID)
      .query("SELECT  Sick_ID,Sick_Detail,Sick_Path,Sick_Type,E_ID FROM efilling_family_medical_history where E_ID = @E_ID");
    return result.recordset;
  }catch(error) {
    console.error(`Datbase Query Error:`, error);
    throw error
  }
}

async function getEfilling_scholarship(E_ID) {
  try {
    const pool = await sql.connect(config);
    const result = await pool.request()
      .input('E_ID', sql.NVarChar, E_ID)
      .query("SELECT s_id,academicYear,scholarshipName,amount,startYear,endYear,E_ID FROM Efilling_scholarship where E_ID = @E_ID");
    return result.recordset;
  }catch(error) {
    console.error(`Datbase Query Error:`, error);
    throw error
  }
}

async function getefilling_siblings(E_ID) {
  try {
    const pool = await sql.connect(config);
    const result = await pool.request()
      .input('E_ID', sql.NVarChar, E_ID)
      .query("SELECT sb_id,sb_name,sb_age,education,occupation,sb_status,income,E_ID FROM efilling_siblings where E_ID = @E_ID");
    return result.recordset;
  }catch(error) {
    console.error(`Datbase Query Error:`, error);
    throw error
  }
}

async function getEfilling_Work(E_ID) {
  try {
    const pool = await sql.connect(config);
    const result = await pool.request()
      .input('E_ID', sql.NVarChar, E_ID)
      .query("SELECT  work_id,salaryWork,location,E_ID FROM Efilling_Work where E_ID = @E_ID");
    return result.recordset;
  }catch(error) {
    console.error(`Datbase Query Error:`, error);
    throw error
  }
}



module.exports = { getEfillingService, getEfillingByIdCardService ,getEfilling_Activity,getEfilling_certificate,getefilling_family_medical_history,getEfilling_scholarship,getefilling_siblings,getEfilling_Work };
