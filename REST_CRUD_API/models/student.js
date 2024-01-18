import mongoose from "mongoose";

const studentschema= new mongoose.Schema({
    name:{type:String, required:true,trim:true},
    age:{type:Number,required:true,min:18,max:59},
    fees:{type:mongoose.Decimal128,requirdd:true}

}) 

const stumodel=mongoose.model("student",studentschema)

export default stumodel