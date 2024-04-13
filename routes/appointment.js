const { Router } = require('express');
const appointmentController = require('../controllers/appointment');
const router = Router();

/**
 * @route POST /appointments
 * @desc Create a new appointment
 * @access Internal
 */
router.post('/', appointmentController.create);

/**
 * @route GET /appointments
 * @desc Get all appointments
 * @access Internal
 */
router.get('/', appointmentController.readAll);

/**
 * @route GET /appointments/:id
 * @desc Get a appointment by ID
 * @access Internal
 */
router.get('/:id', appointmentController.read);

/**
 * @route PUT /appointments/:id
 * @desc Update a appointment by ID
 * @access Internal
 */
router.put('/:id', appointmentController.update);

/**
 * @route DELETE /appointments/:id
 * @desc Delete a appointment by ID
 * @access Internal
 */
router.delete('/:id', appointmentController.delete);

module.exports = router;
