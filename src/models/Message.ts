import mongoose, { Schema, model, models } from "mongoose";
import User from "./User";

const Message = new Schema({
    id: {type: String, required: true, unique: true},
    content: {type: String, required: true},
    author: {type: User, required: true},
    createdAt: {type: Date, required: true, default: Date.now},
});

export default models.Message || model("Message", Message);
