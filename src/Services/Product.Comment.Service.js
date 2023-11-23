const UserProductComment = require("../Models/User.Comment.Product").ProductCommentSchema;
const Comment = require("../Models/Comment").CommentSchema;
const Product = require("../Models/Product").ProductSchema;
const CreateUserProductComment = async (content_, user, product, done) => {
    try {
        const comment_ = new Comment({
            content: content_
        });
        const comment = await comment_.save();
        const findCommentByUser = await UserProductComment.findOne({product: product, user: user});
        const findProduct = await Product.findById(product);
        console.log(findProduct);
        console.log(findCommentByUser);
        if (findCommentByUser == null) {
            console.log(" sản phẩm: ");
            const UserCommentProduct = new UserProductComment({
                user: user,
                product: product,
                reply: [comment._id]
            });
            if (findProduct) {
                
                findProduct.reply = [...findProduct.reply, comment._id];
                console.log(" comment" + findProduct.reply);
                await findProduct.save();
            }
            const result = await UserCommentProduct.save();
            
            done(null, result);
        }else {
            findCommentByUser.reply = [...findCommentByUser.reply, comment._id];
            if (findProduct) {
                findProduct.reply = [...findProduct.reply, comment._id];
                await findProduct.save();
            }
            const result = await findCommentByUser.save();
            done(null, result);
        }
    } catch (error) {
        done(error, null);
    }
};
const GetProductComment = async (product, done) => {
    try {
        const findProduct = await Product.findById(product).populate("reply");
        if (findProduct) {
            done(null, findProduct);
        }else {
            done("Product not found", null);
        }
    }catch (error) {
        done(error, null);
    }
};
module.exports = {
    CreateProductComment: CreateUserProductComment,
    GetProductComment: GetProductComment
};