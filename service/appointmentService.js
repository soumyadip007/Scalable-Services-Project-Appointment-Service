const Appointment = require('../mongoose');
const axios = require('axios');

module.exports.createAppointment = async (appointmentData) => {
    const appointment = new Appointment(appointmentData);
    return await appointment.save();
};

module.exports.updateAppointment = async (id, appointmentData) => {
    return await Appointment.findByIdAndUpdate(id, appointmentData, { new: true });
};

module.exports.deleteAppointment = async (id) => {
    return await Appointment.findByIdAndDelete(id);
};

module.exports.getAppointmentById = async (id) => {
    return await Appointment.findById(id);
};

module.exports.getAllAppointments = async () => {
    return await Appointment.find();
};


// async function checkDoctorExists(doctorId) {
//   try {
//     const response = await axios.get(`http://localhost:3000/project/v1/doctor/${doctorId}`);
//     return response.status === 200;
//   } catch (error) {
//     if (error.response && error.response.status === 404) {
//       return false;
//     }
//     throw error;
//   }
// }

// async function checkPatientExists(patientId) {
//   try {
//     const response = await axios.get(`http://localhost:3000/project/v1/patient/${patientId}`);
//     return response.status === 200;
//   } catch (error) {
//     if (error.response && error.response.status === 404) {
//       return false;
//     }
//     throw error;
//   }
// }

// module.exports = {
//   checkDoctorExists,
//   checkPatientExists
// };
