const mongoose = require("../Database/Connect").mongoose;

const CategorySchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    imageUrl : {
        type: String,
        required: true
    },
    products : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "products"
    }]
});

module.exports = {
    CategorySchema: mongoose.model("categories", CategorySchema)
};