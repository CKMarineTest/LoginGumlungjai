const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');

dotenv.config();

const app = express();
app.use(cors({ origin: '*' }));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json("API Gumlungjai ");
})

require('../backend/routes/auth.routes')(app);
require('../backend/routes/register.routes')(app);
require('../backend/routes/efilling.routes')(app);
require('../backend/routes/user.routes')(app);

const PORT = 8096;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));