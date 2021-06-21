const mongoose  = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    id: {type:Schema.Types.ObjectId},
    name:{type: String,required:true},
    email:{type: String,required:true},
    technical:{type: Boolean, required: true}
})

module.exports = mongoose.model('User',userSchema);