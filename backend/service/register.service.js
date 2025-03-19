const sql = require('mssql');
const config = require('../config/Mssql.config');
const bcrypt = require('bcryptjs');

module.exports = {
    createUserService,
}

async function createUserService(data){
    const poolPromise = await sql.connect(config);
    const transaction = new sql.Transaction(poolPromise);

    try {
        await transaction.begin();

        const requestCheck = new sql.Request(transaction);
        const result = await requestCheck.query`
            SELECT COUNT(*) AS count
            FROM SystemUser
            WHERE su_id = ${data.su_id}
        `;

        if(result.recordset[0].count > 0){
            await transaction.commit();
            return;
        }

        if (!data.Password) {
            throw new Error("Password is missing");
        }

        const hashedPassword = await bcrypt.hash(data.Password, 10);

        const request = new sql.Request(transaction);
        await request.query`
            INSERT INTO SystemUser (card_id, username, Password, Sr_id, su_firstname, su_lastname)
            VALUES
            ('-', ${data.username}, ${hashedPassword}, 1, ${data.su_firstname}, ${data.su_lastname})
            `; 
        console.log('User created Successfully!');

        await transaction.commit();
        console.log('Transaction committed successfully!');
    } catch (error) {
        await transaction.rollback();
        console.error("Transaction failed. Rolled back:", error);
    } finally {
        poolPromise.close(); 
    }
}
