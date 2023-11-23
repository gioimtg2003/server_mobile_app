const { ProductSchema } = require("../Models/Product");

const Product = require("../Models/Product").ProductSchema;
const Category = require("../Models/Category").CategorySchema;
const getAllProducts = async (done) => {
    try{
        let products = await Product.find({}).select({_id: 0, __v: 0});
        done(null, products);
    } catch(err){
        done(err, null);
    }
};
const addProductToCategory = async (categoryId, productId, done) => {
    try {
        let category = Category.findOneAndUpdate({_id: categoryId}, {$push: {products: productId}}, {new: true}).exec();
        done(null, category);
    }catch (err){
        done(err, null);
    }
};
const CreateProducts = async (products, done) => {
    try{
        const product = await Product.create(products);
        addProductToCategory(category, product._id, (err, categoryData) => {
            if (err){
                done(err, null);
            }else{
                done(null, product);
            }
        });
    }catch(err){
        done(err, null);
    }
};
const CreateProduct = async (name, price, quantity, description, imageUrl, category, done) => {
    try{
        let CreateProduct = new Product({
            name: name,
            price: price,
            quantity: quantity,
            imageUrl: imageUrl,
            description: description,
            category: category
        });
        const product = await CreateProduct.save();
        addProductToCategory(category, product._id, (err, categoryData) => {
            if (err){
                done(err, null);
            }else{
                done(null, product);
            }
        });
    }catch(err){
        done(err, null);
    }
};

const getCategories = async (done) => {
    try{
        let categories = await Category.find({}).populate("products");
        done(null, categories);
    } catch(err){
        done(err, null);
    }
};
const getProductById = async (productById, done) => {
    try{
        let products = await Product.findById(productById);
        done(null, products);
    } catch(err){
        done(err, null);
    }
};
module.exports = {
    getAllProducts : getAllProducts,
    CreateProduct : CreateProduct,
    getCategories : getCategories,
    getProductById: getProductById,
    CreateProducts: CreateProducts
};