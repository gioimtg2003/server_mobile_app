let express = require('express');
let bodyParser = require('body-parser');
let router = express.Router();
router.use(bodyParser.urlencoded({extended: true}));
const productController = require("../../Controllers/ProductController");
const authController = require("../../Controllers/AuthControllers");
const CategoryController = require("../../Controllers/CategoryController");
const OrderController = require('../../Controllers/OrderController');
const UserCommentProductController = require('../../Controllers/Product.Comment.Controller');
const UserController = require('../../Controllers/UserController');
function initRouter(){
   
    // router.get("/", productController.getAllProducts); 
    router.get("/product", productController.getCategories);
    // Category
    router.get("/getAllCategory", CategoryController.getAllCategory);
    //Authentication
    router.post("/login", authController.Login);
    router.post("/register", authController.Register);

    // tạo thể loại, sản phẩm
    router.post("/create/category", CategoryController.CreateCategory);
    router.post("/create/product", productController.CreateProduct);
    // get sản phẩm
    router.get("/product/:productId", productController.getProductById);

    // create order
    router.post("/create/order", OrderController.createOrder);
    //Router for Comment
    router.post("/create/comment", UserCommentProductController.CreateProductComment);
    router.get("/user/order/:userId", UserController.getOrderByUserId);
    return router;
}

module.exports = {
    initRouter: initRouter()
};