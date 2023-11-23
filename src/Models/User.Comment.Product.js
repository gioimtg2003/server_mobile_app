const mongoose = require("../Database/Connect").mongoose;
const ProductCommentSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "products"
    },
    reply: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "comments"
    }]
});

module.exports = {
    ProductCommentSchema: mongoose.model("userproductcomments", ProductCommentSchema)
};