const mongoose = require("../Database/Connect").mongoose;

const UserSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    password : {
        type: String,
        required: true
    },
    phone : {
        type: String,
        required: true
    },
    role:  {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    },
    createdAt : {
        type: Date,
        default: Date.now
    },
    orders : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "orders"
    }]  
});

module.exports = {
    UserSchema: mongoose.model("users", UserSchema)
};
