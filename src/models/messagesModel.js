const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    userA:{
        type:String,
        required:true
    },
    userB: {
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
},
{
    timestamps:true
}
)

const Message = mongoose.model('mensajes', messageSchema)

module.exports = Message