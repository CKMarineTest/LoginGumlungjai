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

exports.GetAdminController = async (req, res) => {
  try {
    const data = await UserService.getAdminService();
    console.log("Data in Controller:", data);
    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Error fetching data", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}

exports.DeleteUserController = async (req, res) => {
  try {
    const { su_id } = req.body;
    const data = await UserService.deleteUserService(su_id);
    console.log("Data in Controller:", data);
    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Error in deleteEfillingController:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}