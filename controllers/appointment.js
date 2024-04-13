const appointmentService = require('../service/appointmentService');

module.exports.create = async (req, res) => {
  try {
    const { doctorId, patientId, appointmentDateTime, reason } = req.body;

    /*
    // Check if both doctor and patient exist
    const [doctorExists, patientExists] = await Promise.all([
      appointmentService.checkDoctorExists(doctorId),
      appointmentService.checkPatientExists(patientId)
    ]);

    if (!doctorExists) {
      return res.status(404).json({ message: 'Doctor not found' });
    }

    if (!patientExists) {
      return res.status(404).json({ message: 'Patient not found' });
    }
    */
    const appointment = await appointmentService.createAppointment({
      doctorId,
      patientId,
      appointmentDate: new Date(appointmentDateTime),
      reason
    });

    res.json(appointment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { appointmentDateTime, reason } = req.body;

    const updatedAppointment = await appointmentService.updateAppointment(id, {
      appointmentDateTime,
      reason
    });

    res.json(updatedAppointment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    await appointmentService.deleteAppointment(id);
    res.json({ message: 'Appointment deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.read = async (req, res) => {
  try {
    const { id } = req.params;
    const appointment = await appointmentService.getAppointmentById(id);
    res.json(appointment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.readAll = async (req, res) => {
  try {
    const appointments = await appointmentService.getAllAppointments();
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
