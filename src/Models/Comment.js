const mongoose = require("../Database/Connect").mongoose;
const CommentSchema = mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    productComment : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "productcomments"
    },
}, {
    timestamps: true
});

module.exports = {
    CommentSchema: mongoose.model("comments", CommentSchema)
};