import mongoose from 'mongoose'
import record from '../models/recordModel.js'

let newRecord = mongoose.model('record',record)

// To add record in the database . The data should be passed in req.body
export const postRecord=(req,res)=>{
	const data=new newRecord(req.body)
	data.save((err,mes)=>{
		if(err)res.send("Can't save record!!")
		else res.send('Record saved!!')
	})
}

// To get all records
export const getRecord = (req,res)=>{
	newRecord.find({},(err,dat)=>{
		if(err) res.send('Error in Fetching Data')
		else res.send(dat)
	})
}

// To get data of specified ID . Id need to be passed in reqeuest parameter
export const fetchRecordDetail=(req,res)=>{
	newRecord.find({_id:req.query.id},(err,data)=>{
		if(err) res.send('Error in getting detail')
		else res.send(data)
	})
}

// To update data of particular ID . Pass data and ID in request Body
export const updateRecord=(req,res)=>{
	let array=req.body
	let id=req.body.id
	delete array.id
	newRecord.findOneAndUpdate({_id:id},array,(err,suc)=>{
		if(err)	res.send('Error in updating')
		else res.send('Data Updated!!')
	})
}

// To delete record of particular ID . ID should be passed in request Body
export const deleteRecord = (req,res)=>{
	newRecord.findOneAndDelete({_id:req.body.id},(err,suc)=>{
		if(err) res.send('Error in Deleting')
		else res.send('Deleted Successfully!!')
	})
}