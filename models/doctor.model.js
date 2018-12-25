'use strict'
let Mongoose=require('mongoose');
Mongoose.connect('mongodb://localhost/doctordb',{
    useMongoClient:true,
});
let Schema=Mongoose.Schema;
let DoctorSchema=new Schema({
    FirstName:String,
    LastName:String,
    Degree:String,
    Salary:Number,
    Hospital:String
});
let DoctorModel=Mongoose.model('doctor',DoctorSchema);
module.exports=DoctorModel;