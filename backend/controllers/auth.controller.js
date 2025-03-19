const Efilling = require('../service/efilling.service');

  exports.loginController = async (req,res) => {
    try {

      const { username, Password } = req.body;

      // Validate the input fields
      if (!username || !Password) {
        return res.status(400).json({ message: 'Username and password are required' });
      }
      // Attempt to login the user
      const { user, token } = await Efilling.authService(username, Password);

      // Send the success response with user details and token
      res.status(200).json({
        message: 'Login successful',
        user: {
          username: user.username,
          Sr_id: user.Sr_id,
        },
        token,
      }); 


    } catch (error) {
      // Error handling for login failure
      res.status(401).json({ message: error.message || 'Login failed' });
    }
}



