import {postRecord,getRecord,fetchRecordDetail,updateRecord,deleteRecord} from '../controller/controllers.js'
const routes=(app)=>{
	app.route('/api/record') 		// route to get and post data
		.get(getRecord)		
		.post(postRecord);			// Send data in Request Body Parameter
	app.route('/api/record-detail') // route to get data for specified Object ID's
		.get(fetchRecordDetail)		// Send Id in the Parameter
		.put(updateRecord)			// Send Id and data in the Request Body Parameter
		.delete(deleteRecord);		// Send Id in the Request Body Parameter
}

export default routes