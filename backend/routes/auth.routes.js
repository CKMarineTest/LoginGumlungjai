module.exports = app => {
    const auth = require('../controllers/auth.controller');
  
    app.post('/auth/login', auth.loginController);

  };