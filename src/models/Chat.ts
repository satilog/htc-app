import mongoose, { Schema, model, models } from "mongoose";
import User from "./User";
import Message from "./Message";


const ChatSchema = new Schema({
    url: {type: String, required: true, unique: true},
    chatName: {type: String, required: true},
    description: {type: String, required: true},
    messages: [{ type: Schema.Types.ObjectId, ref: "Message" }], // reference to Message schema
    users: [{ type: Schema.Types.ObjectId, ref: "User" }],
});

export default models.Chat || model("Chat", ChatSchema);