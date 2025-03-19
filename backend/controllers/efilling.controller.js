const Efilling = require('../service/efilling.service');

exports.GetlistEfillingController = async (req, res) => {
  try {
    const data = await Efilling.getEfillingService();
    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Error in getEfillingController:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

exports.GetEfillingController = async (req, res) => {
  try {
    let  idCard  = req.body.card_id
    const data = await Efilling.getEfillingByIdCardService(idCard);
    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Error in getEfillingController:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

