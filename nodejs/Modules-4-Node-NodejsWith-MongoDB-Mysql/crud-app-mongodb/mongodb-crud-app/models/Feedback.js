const mongoose=require('mongoose');
const feedbackSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },

    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true,
        min:10,
        max:10
    },
     ratings:{
        type:String,
        required:true
        
    },

    comment:{
        type:String,
        required:true
    },
})

module.exports=mongoose.model("Feedback",feedbackSchema);