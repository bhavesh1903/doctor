'use strict'
let express=require('express');
let router=express.Router();
let Controller=require('./controllers/doctor.controller');

router.get('/api/doctor',Controller.ListOfDoctor);
router.post('/api/doctor',Controller.CreateDoctor);
router.get('/api/doctor/:id',Controller.DoctorById);
router.put('/api/doctor/:id',Controller.UpdateDoctor);
router.delete('/api/doctor/:id',Controller.DeleteDoctor);
module.exports=router;