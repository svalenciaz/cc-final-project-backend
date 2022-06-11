import asyncHandler from 'express-async-handler'
import Notification from '../models/notificationModel.js'
import mongoose from 'mongoose';


const getNotificationById = asyncHandler(async(req, res) => {

    const notification = await Notification.findById(req.params.id);

    if(notification){
        res.json(notification)
    } else{
        res.status(404).json({message: 'Notification Not Found'})
    }

})


const getNotificationsByUser = asyncHandler(async(req, res) => {

    var UserId = mongoose.Types.ObjectId(req.params.id);

    const notifications = await Notification.find({user: UserId});

    res.json(notifications)

})

const getNotifications = asyncHandler(async(req, res) => {

    const notifications = await Notification.find({});

    res.json(notifications)

})

const editNotifications = asyncHandler(async(req, res) => {

    var info = req.body;

    const notification = await Notification.updateOne({_id: req.params.id}, info);

    if(notification){
        res.json(notification)
    } else{
        res.status(404).json({message: 'Notification Not Found'})
    }

})

const createNotifications = asyncHandler(async(req, res) => {

    var info = req.body;

    const notification = await Notification.create(info);

    if(notification){
        res.json(notification)
    } else{
        res.status(404).json({message: 'Notification Not Found'})
    }

})

export { getNotificationById, getNotifications, editNotifications, createNotifications, getNotificationsByUser }