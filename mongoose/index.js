const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  doctorId: {
    type: String,
    ref: 'Doctor',
    required: true
  },
  patientId: {
    type: String,
    ref: 'Patient',
    required: true
  },
  appointmentDate: {
    type: Date,
    required: true
  },
  reason: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true
  },
  updatedAt: {
    type: Date,
    default: Date.now,
    required: true
  }
});

// Optionally, you can update the `updatedAt` field whenever the document is updated.
appointmentSchema.pre('save', function (next) {
  this.updatedAt = new Date();
  next();
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
