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
      .query("SELECT E_ID, Project_ID, Project_Name, FirstName, LastName, NickName, BirthDate, Age, Mobile, idcard, Mobile2, email, lineId, facebook, special, floor, year, GPA, fatherName, fatherLastName, fatherAge, fatherJob, fatherWorkPlace, fatherSalary, fatherStatus, motherName, motherLastName, motherAge, motherJob, motherWorkPlace, motherSalary, motherStatus, hasSibling, parentName, parentLastName, parentAge, parentJob, parentWorkPlace, parentSalary, siblingCount, siblingMan, siblingWomen, siblingCountRegister, siblingStudying, oldHomeid, oldGroupHomeid, oldsoi, oldroad, salaryWork, uploadFile, faculty, major, parentRelation, showModal, diseaseDetails, selectedUniversity, selectedYear, loaning, expenseType, expenseFee, expenseLiving, expenseBoth, homeRentCost, isRenthouse, nationals, religion, subdistrict,case when  specialWork = 'hasSpecialWork' then 'มีการทำงานพิเศษ' when specialWork = 'notDoing' then 'ไม่มีการทำงานพิเศษ' END as specialWork,case when  scholarshipStatus = 'yes' then 'เคยได้รับทุนการศึกษา' when scholarshipStatus = 'no' then 'ไม่เคยได้รับทุนการศึกษา' END as scholarshipStatus, location, otherHealthStatus, tcas, photo, sameAddress, currentHomeid, currentGroupHomeid, currentsoi, currentroad, permanentHomeid, permanentGroupHomeid, permanentsoi, permanentroad, Province, Districts, SubDistricts, Province2, District2, SubDistrict2, isSupport, isSick, scholarshipgumlungjai, scholarshipother, reasoncomment, haveCertificate, haveVolunteer, topic, isAgree, isSickType, sickDetail, Efilling_statusID, universityName, zipcode1, zipcode2, transcriptFilePath, tcasFilePath, tcasFile2Path, currentFileHomePicPath, homeRentPath, fatherSlipFilePath, motherSlipFilePath, medCertPath,DocFile1Path,DocFile2Path,essayPath FROM Efilling WHERE idcard = @idCard");
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
      .query("SELECT  cr_id,cername,case when c_level = 'national'  then 'ระดับชาติ' when c_level = 'province' then 'ระดับจังหวัด' when c_level = 'region' then 'ระดับภูมิภาค' END as c_level,filepath,E_ID FROM Efilling_certificate where E_ID = @E_ID");
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
      .query("SELECT  Sick_ID,Sick_Detail,Sick_Path,case when Sick_Type = 'mesick' then 'ตนเองป่วย' when Sick_Type = 'parentsick' then 'ผู้ปกครองป่วย' when Sick_Type = 'siblingsick' then 'พี่น้องป่วย' END as Sick_Type,E_ID FROM efilling_family_medical_history where E_ID = @E_ID");
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
      .query(`
        SELECT 
          sb_id,
          sb_name,
          sb_age,
          education,
          occupation,
          sb_status,
          CASE sb_status
            WHEN 'FS01' THEN N'โสด'
            WHEN 'FS02' THEN N'แต่งงานและอยู่ด้วยกัน'
            WHEN 'FS03' THEN N'แต่งงานแต่ไม่ได้อยู่ด้วยกัน'
            WHEN 'FS04' THEN N'ไม่แต่งงานแต่อยู่ด้วยกัน'
            WHEN 'FS05' THEN N'หม้าย'
            WHEN 'FS06' THEN N'หย่าร้าง/แยกทาง/เลิกกัน'
            ELSE N'ไม่ทราบสถานะ'
          END AS sb_status_text,
          income,
          E_ID
        FROM efilling_siblings 
        WHERE E_ID = @E_ID
      `);
    return result.recordset;
  } catch (error) {
    console.error(`Database Query Error:`, error);
    throw error;
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

async function delete_efilling(E_ID) {
  try {
    const pool = await sql.connect(config);
    const result = await pool.request()
      .input('E_ID', sql.NVarChar.E_ID)
      .query("DELETE FROM efilling WHERE E_ID = @E_ID");
    return result.recordset;
  }catch(error) {
    console.error(`Database Query Error:`, error);
  }
}

async function getEfilling_status() {
  try {
    const pool = await sql.connect(config);
    const result = await pool.request()
      .query("SELECT * FROM Efilling_Status");
    return result.recordset;
  }catch(error) {
    console.error("Database Query Error:", error);
  }
} 

async function updateEfillingStatusSuccess(idCard) {
  try {
    const pool = await sql.connect(config);
    const result = await pool.request()
      .input("idCard", sql.NVarChar, String(idCard))
      .query("UPDATE Efilling SET Efilling_statusID = 2 WHERE idcard = @idCard");

    return result.recordset;
  } catch (error) {
    console.error(`Database Query Error:`, error);
  }
}

async function updateEfillingStatusEdit(idcard) {
  try {
    const pool = await sql.connect(config);
    const result = await pool.request()
      .input("idCard", sql.NVarChar, String(idcard))
      .query("UPDATE Efilling SET Efilling_statusID = 0 WHERE idcard = @idCard");
    return result.recordset;
  }catch(error) {
    console.error(`Database Query Error:`, error);
  }
}

async function ConfirmStatus(sts_id, idcard) {
  try {
    const pool = await sql.connect(config);
    const result = await pool.request()
      .input("sts_id", sql.Int, sts_id)
      .input("idCard", sql.NVarChar, String(idcard))
      .query("UPDATE Efilling SET Efilling_statusID = @sts_id WHERE idcard = @idCard");

    if (result.rowsAffected[0] === 0) {
      console.log("No rows were updated. Check if the idcard exists in the database.");
    }
    return result.recordset;
  } catch (error) {
    console.error(`Database Query Error:`, error);
  }
}




module.exports = { getEfillingService, getEfillingByIdCardService ,getEfilling_Activity,getEfilling_certificate,getefilling_family_medical_history,getEfilling_scholarship,getefilling_siblings,getEfilling_Work, delete_efilling, getEfilling_status, updateEfillingStatusSuccess, updateEfillingStatusEdit,ConfirmStatus };
