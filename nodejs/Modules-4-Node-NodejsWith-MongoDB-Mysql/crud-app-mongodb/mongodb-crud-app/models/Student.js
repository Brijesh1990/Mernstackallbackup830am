const mongoose=require('mongoose');
const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },

    email:{
        type:String,
        required:true,
        unique:true
    },
    age:{
        type:Number,
        required:true,
        min:1
    }
})

module.exports=mongoose.model("Student",studentSchema);