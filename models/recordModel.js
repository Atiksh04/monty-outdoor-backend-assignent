import mongoose from 'mongoose'

const model = mongoose.Schema({
	name:String,
	location:String,
	totalRooms:Number,
	typeOfRooms:String,
	amenities:String,
	cancellationPolicy:String,
	checkinTime:String,
	checkoutTime:String,
	hotelPolicies:String
})

export default model