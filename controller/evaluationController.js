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

    if (req.query.list) {
        const ids_list = req.query.list

        if (ids_list instanceof Array){
            var ids = ids_list.map( function(_id) {return mongoose.Types.ObjectId(_id)});
    
            console.log(ids);
        
            const evaluations = await Evaluation.find({_id: {$in: ids}});

            res.json(evaluations);
        } else  {
            var id =  mongoose.Types.ObjectId(ids_list);
    
            console.log(ids);
        
            const evaluations = await Evaluation.find({_id: id});

            res.json(evaluations);
        }
    } else {
        const evaluations = await Evaluation.find({});

        res.json(evaluations);
    }

    

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

const createEvaluations = asyncHandler(async(req, res) => {
    var info = req.body;

    const evaluation = await Evaluation.create(info);

    if(evaluation){
        res.json(evaluation)
    } else{
        res.status(404).json({message: 'Evaluation Not Created'})
    }

})

export { getEvaluationById, getEvaluations, editEvaluations, createEvaluations }