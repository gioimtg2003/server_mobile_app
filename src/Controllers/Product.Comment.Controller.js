const ProductCommentService = require('../Services/Product.Comment.Service');

const CreateProductComment = async (req, res) => {
    const {content, user, product} = req.body;
    ProductCommentService.CreateProductComment(content, user, product, (err, result) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: err
            });
            return;
        }
        res.status(200).json({
            code : 200,
            success: "Bạn đã đăng bình luận thành công",
            message: result
        });
    });
 };
 const GetProductComment = async (req, res) => {
    const {productId} = req.params;
    ProductCommentService.GetProductComment(productId, (err, result) => {
        if (err) {
            res.status(500).json({
                code : 500,
                success: false,
                message: err
            });
            return;
        }
        res.status(200).json({
            code : 200,
            success: "Lấy dữ liệu thành công",
            message: result
        });
    });
 };

 module.exports = {
    CreateProductComment: CreateProductComment,
    GetProductComment: GetProductComment
    };