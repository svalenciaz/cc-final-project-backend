import asyncHandler from 'express-async-handler'
import Evaluation from '../models/evaluationModel.js'
import mongoose from 'mongoose';


const getEvaluationById = asyncHandler(async(req, res) => {

    const evaluation = await Evaluation.findById(req.params.id);

    if(evaluation){
        res.json(evaluation)
    } else{
        res.status(404).json({message: 'Evaluation Not Found'})
    }

})


const getEvaluations = asyncHandler(async(req, res) => {

    var ids = mongoose.Types.ObjectId(req.body.evaluations);

    const evaluations = await Evaluation.find({_id: {$in: ids}});

    res.json(evaluations)

})

const editEvaluations = asyncHandler(async(req, res) => {

    var info = req.body;

    const evaluation = await Evaluation.updateOne({_id: req.params.id}, info);

    if(evaluation){
        res.json(evaluation)
    } else{
        res.status(404).json({message: 'Evaluation Not Found'})
    }

})

export { getEvaluationById, getEvaluations, editEvaluations }