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

exports.deleteEfillingController = async (req, res) => {
  try {
    const data = await Efilling.delete_efilling();
    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Error to delete Efilling", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}

exports.GetEfillingStatus = async (req, res) => {
  try {
    const data = await Efilling.getEfilling_status();
    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Error to GetEfillingStatus", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}

exports.UpdateEfillingStatusSuccess = async (req, res) => {
  try {
    const { idCard } = req.body;

    if (!idCard || typeof idCard !== 'string') {
      return res.status(400).json({ success: false, message: 'idCard is required and must be a string' });
    }

    const data = await Efilling.updateEfillingStatusSuccess(idCard);
    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Error to UpdateEfillingStatusSuccess", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

exports.UpdateEfillingStatusEdit = async (req, res) => {
  try {
    const { idCard } = req.body;

    if (!idCard || typeof idCard !== 'string') {
      return res.status(400).json({ success: false, message: 'idCard is required and must be a string' });
    }

    const data = await Efilling.updateEfillingStatusEdit(idCard);
    res.status(200).json({ success: true, data });
  }catch(error) {
    console.error("Error to UpdateEfillingStatusEdit", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}

exports.GetEfillingController = async (req, res) => {
  let idCard = req.body.card_id

  const dataFetched = await Efilling.getEfillingByIdCardService(idCard);

  // Check if data has been successfully fetched and contains E_ID
  if (dataFetched && dataFetched[0].E_ID) {
    // Fetch related data using E_ID
    const dataActive = await Efilling.getEfilling_Activity(dataFetched[0].E_ID.toString());
    const dataCertificate = await Efilling.getEfilling_certificate(dataFetched[0].E_ID.toString());
    const dataFamilyMedicalHistory = await Efilling.getefilling_family_medical_history(dataFetched[0].E_ID.toString());
    const dataScholarship = await Efilling.getEfilling_scholarship(dataFetched[0].E_ID.toString());
    const dataSiblings = await Efilling.getefilling_siblings(dataFetched[0].E_ID.toString());
    const dataWork = await Efilling.getEfilling_Work(dataFetched[0].E_ID.toString());

    // Add fetched data as properties to the main data object
    let completeData = {
      main: dataFetched,
      active: dataActive,
      certificate: dataCertificate,
      familyMedicalHistory: dataFamilyMedicalHistory,
      scholarship: dataScholarship,
      siblings: dataSiblings,
      work: dataWork
    };

    res.status(200).json({ success: true, data: completeData });

    // Now `completeData` contains all the additional information
    // console.log('Complete Data:', completeData);
  } else {
    console.log('No valid data found for the given idCard or missing E_ID.');
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

