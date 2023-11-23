const mongoose = require("../Database/Connect").mongoose;
const OrderSchema = new mongoose.Schema({
    address : {
        type: String,
        required: true
    },
    statusName : {
        type: String,
        enum: ["Pending", "Delivering", "Delivered"],
        default: "Pending",
        required: true
    },
    createDate : {
        type: Date,
        default: Date.now,
        required: true
    },
    completeDate : {
        type: Date,
        required: false
    },
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    orderDetails : [{
        Product : {
            type: mongoose.Schema.Types.ObjectId,
            ref: "products",
            required: true
        },
        Quantity : {
            type: Number,
            required: true
        }
    }]
});

module.exports = {
    OrderSchema: mongoose.model("orders", OrderSchema)
};