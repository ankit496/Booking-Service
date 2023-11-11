const {BookingService}=require('../services/index')
const bookingService=new BookingService()
const {StatusCodes}=require('http-status-code')
const { ServiceError } = require('../utils/errors')
const create=async(req,res)=>{
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
module.exports={
    create
}