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

    const users = await User.find({});

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
    console.log(req.body);
    const newUser = await new User({
        name: req.body.name,
        experience: req.body.experience,
        isActive: req.body.isActive
     }).save()
     .then(user => res.json(user))
     .catch(err => res.status(404).json({message: 'User Not created', error: err}));

})

export { getUserById, getUsers, editUsers, createUsers }