import express from 'express'
import connectdb from './db/connectdb.js'
import {join} from 'path'
import path from 'path'
import web from "./routes/web.js"

const app=express()


//database connection
connectdb()


 //middleware
 app.use(express.json()) 


 //load routes
app.use('/student',web)

app.listen('8000',()=>{
    console.log(`Server listening `)
})