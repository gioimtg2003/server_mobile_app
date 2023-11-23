const CategoryService = require('../Services/CategoryService');

const getAllCategory = (req, res) => {
    CategoryService.getAllCategory((err, categories) => {
        if(err){
            res.status(500).json({
                code: 500, 
                message: err,
                data : []
            });
        }else{
            res.status(200).json({
                code: 200,
                message: "oke",
                data: categories
            });
        }
    });
};
const CreateCategory = (req, res) => {
    const {name, imageUrl} = req.body;
    if (!name || !imageUrl){
        return res.json({
            code: 400,
            message: "Thiếu thông tin",
            data: {}
        });
    }
    CategoryService.CreateCategory(name, imageUrl, (err, category) => {
        if (err){
            return res.json({
                code: 400,
                message: err,
                data: {}
            });
        }
        return res.status(200).json({
            code: 200,
            message: "Tạo thành công",
            data: category
        });
    });
};
module.exports = {
    getAllCategory: getAllCategory,
    CreateCategory: CreateCategory
};