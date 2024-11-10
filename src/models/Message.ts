import mongoose, { Schema, model, models } from "mongoose";
import User from "./User";

const Message = new Schema({
    content: {type: String, required: true},
    author: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    createdAt: {type: Date, required: true, default: Date.now},
    contentChange: {
        type: Boolean,
        default: false,
    },
    changedMessage: {
        type: String,
    },
    chatId: {
        type: Schema.Types.ObjectId,
        ref: "Chat",
        required: true,
    },
});

export default models.Message || model("Message", Message);
