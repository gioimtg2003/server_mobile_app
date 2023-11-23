const Product = require("../Models/Product").ProductSchema;
const Category = require("../Models/Category").CategorySchema;
const getAllCategory = async (done) => {
    try{
        let categories = await Category.find({}).populate("products").select({__v: 0});
        done(null, categories);
    } catch(err){
        done(err, null);
    }
};
const CreateCategory = async (name, imageUrl, done) => {
    try {
        let category = new Category({
            name: name,
            imageUrl: imageUrl
        });
        let newCategory = await category.save();
        done(null, newCategory);
    }catch (err){
        done(err, null);
    }
};
const addProductToCategory = async (done, categoryId, productId) => {
    try {
        let category = Category.findOneAndUpdate({_id: categoryId}, {$push: {products: productId}}, {new: true});
        done(null, category);
    }catch (err){
        done(err, null);
    }
};
module.exports = {
    getAllCategory: getAllCategory,
    CreateCategory: CreateCategory,
    addProductToCategory: addProductToCategory
};