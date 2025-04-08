const auth = require('../service/auth.service');

exports.loginController = async (req, res) => {
  try {
    const { username, Password } = req.body;

    // Validate the input fields
    if (!username || !Password) {
      return res.status(400).json({ message: 'Username and password are required' });
    }

    // Attempt to login the user
    const { user, token } = await auth.authService(username, Password);

    // Check if user data is valid and contains firstname, lastname
    if (!user || !user.su_firstname || !user.su_lastname) {
      return res.status(400).json({ message: 'User data is incomplete' });
    }

    // Send the success response with user details, token, firstname, and lastname
    res.status(200).json({
      message: 'Login successful',
      user: {
        username: user.username,
        Sr_id: user.Sr_id,
        su_firstname: user.su_firstname,  // เพิ่ม firstname
        su_lastname: user.su_lastname,    // เพิ่ม lastname
      },
      token,
    });
  } catch (error) {
    // Error handling for login failure
    res.status(401).json({ message: error.message || 'Login failed' });
  }
};
