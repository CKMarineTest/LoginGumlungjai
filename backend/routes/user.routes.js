module.exports = app => {
    const UserController = require('../controllers/user.controller');
  
    app.post('/user/getuser', UserController.GetUserController);
    app.post('/user/deleteuser', UserController.DeleteUserController);
  }
  