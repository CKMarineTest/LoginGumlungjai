const {
  getEfilling,
  getEfillingByIdCard,
  getEfillingPhoto,
} = require("../service/efilling.service");

async function getEfillingController(req, res) {
  try {
    const data = await getEfilling();
    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Error in getEfillingController:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}

async function getEfillingByIdCardController(req, res) {
  if (!req.params.idCard) {
    return res
      .status(400)
      .json({ success: false, message: "idCard is required" });
  }

  const { idCard } = req.params; 

  try {
    const data = await getEfillingByIdCard(idCard);

    if (data.length > 0) {
      res.status(200).json({ success: true, data });
    } else {
      res.status(404).json({
        success: false,
        message: "No data found for the given ID Card",
      });
    }
  } catch (error) {
    console.error("Error in getEfillingByIdCardController:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}

async function getEfillingPhotoController(req, res) {
  if (!req.params.idCard) {
    return res
      .status(400)
      .json({ success: false, message: "idCard is required" });
  }

  const { idCard } = req.params;

  try {
    const data = await getEfillingPhoto(idCard);
    if (data.length > 0) {
      res.status(200).json({ success: true, data });
    } else {
      res.status(404).json({
        success: false,
        message: "No data found for the given ID Card",
      });
    }
  } catch (error) {
    console.error("Error in getEfillingByIdCardController:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}

module.exports = { getEfillingController, getEfillingByIdCardController, getEfillingPhotoController };
