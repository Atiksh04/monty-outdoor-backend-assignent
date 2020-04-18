import express from 'express'
import route from './routes/routes'
import mongoose from 'mongoose'
const app=express()

mongoose.Promise=global.Promise
mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb://localhost:27017/monty-assignment',{useNewUrlParser:true})

app.use(express.urlencoded())

route(app)

app.listen(3000,()=>{
	console.log('RestApi Node Js started at 3000')
})