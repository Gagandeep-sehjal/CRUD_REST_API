import mongoose from 'mongoose'
const connnectdb= async()=>{
    try{

        const db_options={
            dbname:"crud_api"
        }
        mongoose.connect("your_mongo_url",db_options)
       console.log("connected sucessfully..")
    }catch(err){
        console.log(err)
    }
}
 
export default connnectdb;