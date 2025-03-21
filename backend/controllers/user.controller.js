const UserService = require("../service/user.service");

exports.GetUserController = async (req, res) => {
  try {
    const data = await UserService.getUserService();
    console.log("Data in Controller:", data);
    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Error in getEfillingController:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
