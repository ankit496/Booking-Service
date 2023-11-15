const express=require('express')
const router=express.Router()
const {BookingController}=require('../../controllers/index')

// const {createChannel}=require('../../utils/message_queue')

// const channel=await createChannel()
const bookingController=new BookingController() 

router.post('/bookings',bookingController.create)
router.post('/publish',bookingController.sendMessageToQueue)
module.exports=router