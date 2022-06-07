import asyncHandler from 'express-async-handler'
import Workload from '../models/workloadModel.js'
import mongoose from 'mongoose';


const getWorkloadById = asyncHandler(async(req, res) => {

    const workload = await Workload.findById(req.params.id);

    if(workload){
        res.json(workload)
    } else{
        res.status(404).json({message: 'Workload Not Found'})
    }

})


const getWorkloads = asyncHandler(async(req, res) => {

    var UserId = mongoose.Types.ObjectId(req.params.id);

    const workloads = await Workload.find({user: UserId});

    res.json(workloads)

})

const editWorkloads = asyncHandler(async(req, res) => {

    var info = req.body;

    const workload = await Workload.updateOne({_id: req.params.id}, info);

    if(workload){
        res.json(workload)
    } else{
        res.status(404).json({message: 'Workload Not Found'})
    }

})

const createWorkloads = asyncHandler(async(req, res) => {

    var info = req.body;

    const workload = await Workload.create(info);

    if(workload){
        res.json(workload)
    } else{
        res.status(404).json({message: 'Workload Not Found'})
    }

})

export { getWorkloadById, getWorkloads, editWorkloads, createWorkloads }