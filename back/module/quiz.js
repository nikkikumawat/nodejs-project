import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true,
    },
    answer: {
        type: String,
        required: true,
    },
    option: {
        type: String,
        required: true
    },
    
})

const ques = mongoose.model("User", quizSchema);