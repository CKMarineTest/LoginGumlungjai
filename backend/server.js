const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');

const efillingRoutes = require('./routes/efilling.routes');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({ origin: '*' }));

app.get('/', (req, res) => {
    res.json("Hello Node!");
})

app.use('/api', efillingRoutes);

const PORT = 8099;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));