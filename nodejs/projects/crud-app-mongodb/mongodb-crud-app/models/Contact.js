const mongoose=require('mongoose');
const contactSchema=new mongoose.Schema({
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
     subject:{
        type:String,
        required:true
        
    },

    message:{
        type:String,
        required:true
    },
})

module.exports=mongoose.model("Contact",contactSchema);