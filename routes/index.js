const { Router } = require('express');
const appointment = require('./appointment');
const router = new Router();
const v1 = new Router();

v1.use('/appointment', appointment);

router.use('/v1', v1);

module.exports = router;
