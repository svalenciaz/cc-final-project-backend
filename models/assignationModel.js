import mongoose from 'mongoose';

const assignationSchema = mongoose.Schema({

    workload: {
        type: mongoose.ObjectId,
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

    evaluations: {
        type: [mongoose.ObjectId],
        required: true,
        default: []
    },

    done: {
        type: Number,
        required: true,
        default: 0,
    }
})

const Assignation = mongoose.model('assignations', assignationSchema)

export default Assignation