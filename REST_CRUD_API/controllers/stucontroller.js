import stumodel from "../models/student.js"

class stucontroller{

   
 //create new doc 

   static createdoc=async (req,res)=>{
   
      try{
       // console.log(req.body) 
       const {name,age,fees}=req.body

       const doc =new stumodel({
         name:name, 
         age:age,
         fees:fees
      
       })
       const result=await doc.save()
       res.status(201).send(result)
}catch(err)
   {
console.log(err)
   }}

   

      //get doc
    static getalldoc= async(req,res)=>{
      try{
         const result =await stumodel.find()
         res.send(result)
      }
      catch(err){
         console.log(err)
      } 
         }
         

  //get single doc by id
   static getdocid = async(req,res)=>{
      try{
         const result =await stumodel.findById(req.params.id)
         res.send(result)
      }
      catch(err){
         console.log(err)
      } 
         }
         

   //update 
   static updatedoc= async(req,res)=>{
          
          try{
            const result=await stumodel.findByIdAndUpdate(req.params.id,req.body)
            res.send(result) 
          }
          catch(err){
            console.log(err)
          }
          
            }
           




//delete 

     static deletedoc=async(req,res)=>{
      try{
         const result=await stumodel.findByIdAndDelete(req.params.id)
         res.status(204).send(result)
      }catch(err){
         console.log(err)
      }
      
      }
     


} 



export default stucontroller   