import mongoose from "mongoose";

const todos = new mongoose.models({
    content : {
        type:String,
        required:true,
    
    },

    complete:{
        type:Boolean,
        default:false,

    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    subTodos :[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: "SubTodo"
        }
    ]// Array of sub Todo
},{timestamps:true});

export const Todo = mongoose.model( "Todo" ,todos)