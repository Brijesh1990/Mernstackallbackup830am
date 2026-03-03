const mongoose=require('mongoose');
const countrySchema=new mongoose.Schema({
    countryname:{
        type:String,
        required:true,
        minlength:2
    },

})
module.exports=mongoose.model("Country",countrySchema);