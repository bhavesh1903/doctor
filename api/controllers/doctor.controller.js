'use strict'

let Doctor=require('../../models/doctor.model');

function  getdoctor(req,res){
    console.log('getdoctor',getdoctor);
    Doctor.find().then((docotr)=>{
        res.send(docotr);
    }).catch((error)=>{
        res.send(error);
    })
}

function postDoctor(req,res){
    let doctor=new Doctor();
    console.log('req.body',req.body);
    doctor.FirstName=req.body.FirstName;
    doctor.LastName=req.body.LastName;
    doctor.Degree=req.body.Degree;
    doctor.Salary=req.body.Salary;
    doctor.Hospital=req.body.Hospital;
    doctor.save().then((doctor)=>{
        res.send(doctor);
    }).catch((error)=>{
        res.send(error);
    });
}
function DoctorGetId(req,res){
    let DoctorId=req.params.id;
    Doctor.findById({_id:DoctorId}).then((doctor)=>{
        res.send(doctor);
    }).catch((error)=>{
        res.send(error);
    })
}
function PutDoctor(req,res){
    let DoctorId=req.params.id;
    Doctor.findById({_id:DoctorId}).then((Doctor)=>{
        Doctor.FirstName=req.body.FirstName;
        Doctor.LastName=req.body.LastName;
        Doctor.Degree=req.body.Degree;
        Doctor.Salary=req.body.Salary;
        Doctor.Hospital=req.body.Hospital;
        Doctor.save().then((doctor)=>{
            res.send(doctor);
        }).catch((error)=>{
            res.send(error);
        });
    })
}
function RemoveDoctor(req,res){
    let DoctorId=req.params.id;
    Doctor.remove({_id:DoctorId}).then((doctor)=>{
        res.send(doctor);
    }).catch((error)=>{
        res.send(error);
    });
}
module.exports={
    ListOfDoctor:getdoctor,
    CreateDoctor:postDoctor,
    DoctorById:DoctorGetId,
    UpdateDoctor:PutDoctor,
    DeleteDoctor:RemoveDoctor
};