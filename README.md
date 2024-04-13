# Scalable-Services-Project-Appointment-Service

## Appointment Service

This is a RESTful API service for managing appointments between doctors and patients.

### Endpoints

#### Create a New Appointment

```bash
curl -X POST -H "Content-Type: application/json" -d '{
  "doctorId": "Doctor's ID",
  "patientId": "Patient's ID",
  "appointmentDateTime": "Preferred Date and Time for the appointment",
  "reason": "Reason for the appointment"
}' http://localhost:3000/appointment

