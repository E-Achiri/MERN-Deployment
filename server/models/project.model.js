const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
    title:{
        type: String,
        required:[true, "Title is required"],
        minlength:[3, "Title should be at least 3 characters."]
    },
    duedate:{
        type: Date,
        required:[true, "Due Date is required"]
    },
    status:{
        type: String,
        default: "backlog"
    }
}, {timestamps:true})


const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;