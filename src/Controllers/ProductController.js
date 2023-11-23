const ProductService = require('../Services/ProductService');
const getProductById = async (req, res) => {
    const {productId} = req.params;
    ProductService.getProductById(productId, (err, products) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving products."
            });
        } else {
            res.json({
                status: 200,
                message : "Success",
                data: products
            });
        }
    });
};
const getAllProducts = async (req, res) => {
    ProductService.getAllProducts((err, products) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving products."
            });
        } else {
            res.json({
                status: 200,
                data: products
            });
        }
    });

};

const CreateProduct = async (req, res) => {
    const {name, price, quantity, description, imageUrl, category} = req.body;
    if (!name || !price || !quantity || !description || !imageUrl || !category){
        return res.json({
            code: 400,
            message: "Thiếu thông tin",
            data: []
        });
    }
    ProductService.CreateProduct(name, price, quantity, description, imageUrl, category, (err, products) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving products."
            });
        } else {
            res.json({
                status: 200,
                message: "Tạo thành công",
                data: products
            });
        }
    });
};

const getCategories = async (req, res) => {
    ProductService.getCategories((err, categories) => { 
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving products."
            });
        } else {
            res.json({
                code: 200,
                message: "Success",
                data: categories
            });
        }
    });
};
module.exports = {
    getAllProducts : getAllProducts,
    CreateProduct : CreateProduct,
    getCategories : getCategories,
    getProductById : getProductById
    };
