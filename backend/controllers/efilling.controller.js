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

    // Check if data has been successfully fetched and contains E_ID
    if (data && data.E_ID) {
        // Fetch related data using E_ID
        const dataActive = await Efilling.getEfilling_Activity(data.E_ID);
        const dataCertificate = await Efilling.getEfilling_certificate(data.E_ID);
        const dataFamilyMedicalHistory = await Efilling.getefilling_family_medical_history(data.E_ID);
        const dataScholarship = await Efilling.getEfilling_scholarship(data.E_ID);
        const dataSiblings = await Efilling.getefilling_siblings(data.E_ID);
        const dataWork = await Efilling.getEfilling_Work(data.E_ID);

        // Add fetched data as properties to the main data object
        data.active = dataActive;
        data.certificate = dataCertificate;
        data.familyMedicalHistory = dataFamilyMedicalHistory;
        data.scholarship = dataScholarship;
        data.siblings = dataSiblings;
        data.work = dataWork;

        // Now `data` contains all the additional information
        console.log('Complete Data:', data);
    } else {
        console.log('No valid data found for the given idCard or missing E_ID.');
    }

    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Error in getEfillingController:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

