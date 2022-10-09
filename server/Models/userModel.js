import mongoose from 'mongoose';

const UserSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        firstname: {
            type: String,
            required: true
        },
        lastname: {
            type: String,
            required: true
        },
        isAdmin: {
            type: Boolean,
            default: false
        },
        profilePicture: String,
        coverPicture: String,
        about: String,
        livesin: String,
        worksAt: String,
        country: String,
        relationShip: String,
        followers: [] ,
        following: []
    },
    {timestamps: true}
)

const UserModel = mongoose.model("users",UserSchema);
export default UserModel;