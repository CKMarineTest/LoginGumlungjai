
module.exports = app => {
    
    const register = require('../controllers/register.controller');
  
    app.post('/register/createUser', register.createUserController);

  };
