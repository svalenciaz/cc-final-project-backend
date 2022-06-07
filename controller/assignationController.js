import asyncHandler from 'express-async-handler'
import Assignation from '../models/assignationModel.js'
import mongoose from 'mongoose';


const getAssignationById = asyncHandler(async(req, res) => {

    const assignation = await Assignation.findById(req.params.id);

    if(assignation){
        res.json(assignation)
    } else{
        res.status(404).json({message: 'Assignation Not Found'})
    }

})


const getAssignations = asyncHandler(async(req, res) => {

    var UserId = mongoose.Types.ObjectId(req.params.id);

    const assignations = await Assignation.find({user: UserId});

    res.json(assignations)

})

const editAssignations = asyncHandler(async(req, res) => {

    var info = req.body;

    const assignation = await Assignation.updateOne({_id: req.params.id}, info);

    if(assignation){
        res.json(assignation)
    } else{
        res.status(404).json({message: 'Assignation Not Found'})
    }

})

const createAssignations = asyncHandler(async(req, res) => {

    var info = req.body;

    const assignation = await Assignation.create(info);

    if(assignation){
        res.json(assignation)
    } else{
        res.status(404).json({message: 'Assignation Not Found'})
    }

})

export { getAssignationById, getAssignations, editAssignations, createAssignations }