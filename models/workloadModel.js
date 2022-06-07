import mongoose from 'mongoose';

const workloadSchema = mongoose.Schema({

    name: {
        type: String,
        required: true,
    },

    user: {
        type: mongoose.ObjectId,
        required: true,
    },

    type: {
        type: String,
        required: true,
    },

    date: {
        type: Date,
        required: true,
    },

    days: {
        type: Number,
        required: true,
    },
})

const Workload = mongoose.model('workloads', workloadSchema)

export default Workload