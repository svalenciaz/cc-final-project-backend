import mongoose from 'mongoose';

const userSchema = mongoose.Schema({

    name: {
        type: String,
        required: true,
    },

    experience: {
        type: [String],
        required: true,
        default: [],
    },

    isActive: {
        type: Boolean,
        required: true,
        default: true,
    }
})

const User = mongoose.model('users', userSchema)

export default User