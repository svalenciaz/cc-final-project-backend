import mongoose from 'mongoose';

const chatSchema = mongoose.Schema({
    sender: {
        type: Boolean,
        required: true,
    },

    text: {
        type: String,
        required: true,
    }
})

const evaluationSchema = mongoose.Schema({

    chat: [chatSchema],

    type: {
        type: String,
        required: true,
    },

    isEvaluated: {
        type: Boolean,
        required: true,
        default: false,
    },

    calification: {
        type: Number,
        min: 0,
        max: 10,
        required: false,
        default: 0
    },
})

const Evaluation = mongoose.model('evaluations', evaluationSchema)

export default Evaluation