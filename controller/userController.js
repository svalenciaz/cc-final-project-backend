import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import mongoose from 'mongoose';


const getUserById = asyncHandler(async(req, res) => {

    const user = await User.findById(req.params.id);

    if(user){
        res.json(user)
    } else{
        res.status(404).json({message: 'User Not Found'})
    }

})


const getUsers = asyncHandler(async(req, res) => {

    var UserId = mongoose.Types.ObjectId(req.params.id);

    const users = await User.find({user: UserId});

    res.json(users)

})

const editUsers = asyncHandler(async(req, res) => {

    var info = req.body;

    const user = await User.updateOne({_id: req.params.id}, info);

    if(user){
        res.json(user)
    } else{
        res.status(404).json({message: 'User Not Found'})
    }

})

const createUsers = asyncHandler(async(req, res) => {

    var info = req.body;

    const user = await User.create(info);

    if(user){
        res.json(user)
    } else{
        res.status(404).json({message: 'User Not Found'})
    }

})

export { getUserById, getUsers, editUsers, createUsers }