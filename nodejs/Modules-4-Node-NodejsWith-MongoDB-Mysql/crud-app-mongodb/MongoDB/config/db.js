// create a database connection via mongDB 
const mongoose=require("mongoose");
const connectDB=async()=>{

    try 
    {
      await mongoose.connect(process.env.MONGO_URI);
      console.log("Database successfully connected with app")
    }
    catch(err)
    {
      console.error(err);
      process.exit(1);
    }

}

module.exports=connectDB;