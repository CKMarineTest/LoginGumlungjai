module.exports = app => {
    
    const efilling = require('../controllers/efilling.controller');
  
    app.post('/efilling/GetlistEfilling', efilling.GetlistEfillingController);
    app.post('/efilling/GetEfilling', efilling.GetEfillingController);

    app.post('/efilling/GetEfillingStatus', efilling.GetEfillingStatus);

    app.post('/efilling/UpdateEfillingStatusSuccess', efilling.UpdateEfillingStatusSuccess);
    app.post('/efilling/UpdateEfillingStatusEdit', efilling.UpdateEfillingStatusEdit);
  };