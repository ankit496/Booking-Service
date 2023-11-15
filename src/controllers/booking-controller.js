const {BookingService}=require('../services/index')
const bookingService=new BookingService()
const {StatusCodes}=require('http-status-code')
const { ServiceError } = require('../utils/errors')
const {createChannel,publishMessage}=require('../utils/message_queue')
const {REMINDER_BINDING_KEY}=require('../config/serverConfig')

class BookingController{
    constructor(){
    }
    async sendMessageToQueue(req,res){
        const channel=await createChannel()
        const data={message:'Success'}
        publishMessage(channel,REMINDER_BINDING_KEY,JSON.stringify(data))
        return res.status(200).json({
            message:'Successfully published the event'
        })
    }
    async create (req,res){
        try{
            const response=await bookingService.createBooking(req.body)
            return res.status(200).json({
                message:'Successfully completed Booking',
                success:true,
                err:{},
                data:response
            })
        }
        catch(error){
            console.log(error)
            return res.status(error.statusCode).json({
                message:error.message,
                success:true,
                err:error.explanation,
                data:{}
            })
        }
    }
}
module.exports=BookingController
