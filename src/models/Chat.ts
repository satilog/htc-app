import mongoose, { Schema, model, models } from "mongoose";
import User from "./User";
import Message from "./Message";


const ChatSchema = new Schema({
    url: {type: String, required: true, unique: true},
    chatName: {type: String, required: true},
    description: {type: String, required: true},
    messages: [Message],
    users: [User],
});

export default models.User || model("User", UserSchema);
