import mongoose, { Schema, model, models } from "mongoose";


const UserSchema = new Schema({
    email: {type: String, required: true, unique: true},
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    pronouns: [String],
});

export default models.User || model("User", UserSchema);
