import mongoose from 'mongoose';

const notificationSchema = mongoose.Schema({

    title: {
        type: String,
        required: true,
    },

    content: {
        type: String,
        required: true,
    },

    url: {
        type: String,
        required: true,
    },
    
    user: {
        type: mongoose.ObjectId,
        required: true,
    }
})

const Notification = mongoose.model('notifications', notificationSchema)

export default Notification