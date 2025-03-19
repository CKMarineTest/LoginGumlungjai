const registerService = require('../service/register.service');

exports.createUserController = async (req, res) => {
    try {
        let user_data = req.body; 

        const user = await registerService.createUserService(user_data);

        res.status(200).json({
            success: true,
            message: "Create User Success",
            data: user
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error Creating user",
            data: error
        });
        console.error("ERROR:", error);
    }
};
