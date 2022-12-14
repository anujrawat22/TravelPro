const mongoose = require("mongoose")

const hotelschema = mongoose.Schema({
    poster:{type:String},
    hotel_name:{type:String},
    city:{type:String},
    hotel_address:{type:String},
    distance:{type:Number},
    rating:{type:Number},
    star_rating:{type:Number},
    review:{type:String},
    review_count:{type:Number},
    price:{type:Number},
    discount:{type:Number},
    reserve_Status:{type:Boolean , default:false},
    other_images :[String],
    explore_neighbourhood:[String],
    room_left:{type:Number},
    property_type:String,
    amenities:[String],
    meals_type:[String],
    payment_type:[String],
    Accessibility:[String],
    room_type:{type:Number},
    rooms:[
        {
            is_available:{type:Boolean,default:true},
            room_image:[String],
            room_title:{type:String},
            room_size:{type:String},
            member:{type:Number},
            room_amenities:[String],
            room_refund_policy:[String],
            room_price:{type:Number},
            room_discount:{type:Number},
            room_total_dis:{type:Number},
            Reserve:{type:Boolean},
            room_avail:{type:Number}
        }
    ],
    userID:{type:String},
})

const HotelModel = mongoose.model("hotel",hotelschema)

module.exports = {HotelModel}