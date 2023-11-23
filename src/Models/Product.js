const mongoose = require("../Database/Connect").mongoose;

const ProductSchema = new mongoose.Schema({
    
    name : {
        type: String,
        required: true
    },
    price : {
        type: Number,
        required: true
    },
    quantity : {
        type: Number,
        required: true
    },
    imageUrl : {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true,
    },
    category : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "categories",
        required: true
    },
    reply : [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: "comments"
    }]
});

module.exports = {
    ProductSchema: mongoose.model("products", ProductSchema)
};
