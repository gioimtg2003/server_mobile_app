const Product = require("../Models/Product").ProductSchema;
const Order = require("../Models/Order").OrderSchema;
const User = require("../Models/User").UserSchema;
const getAllOrder = async (done) => {
    try{
        let orders = await Order.find({}).select({__v: 0}).populate("user", "name email phone");
        done(null, orders);
    } catch(err){
        done(err, null);
    }
};

const getOrderById = async (done, id) => {
    try{
        let order = await Order.findById(id).select({__v: 0}).populate("user", "name email phone");
        done(null, order);
    } catch(err){
        done(err, null);
    }
};

const createOrder = async (address, userId, orderDetails, done) => {
    try {
        let order = new Order({
            address: address,
            user: userId,
            orderDetails: orderDetails
        });
        let newOrder = await order.save();
        await User.findOneAndUpdate({_id: userId}, {$push: {orders: newOrder._id}}, {new: true});
        done(null, newOrder);
    }catch (err){
        done(err, null);
    }
};
const createOrderDetail = async (productId, quantity, price) => {
    try {
        let product = await Product.findById(productId);
        if(product){
            let orderDetail = {
                Product: productId,
                Quantity: quantity,
                Price: price
            };
            return orderDetail;
        }
        return null;
    }catch (err){
        return null;
    }
};
const addOrderDetailIntoOrder = async (done, orderId, orderDetail) => {
    try {
        let order = Order.findOneAndUpdate({_id: orderId}, {$push: {orderDetails: orderDetail}}, {new: true});
        done(null, order);
    } catch (err){
        done(err, null);
    }
};
module.exports = {
    getAllOrder: getAllOrder,
    getOrderById: getOrderById,
    createOrder: createOrder,
    createOrderDetail: createOrderDetail,
    addOrderDetailIntoOrder: addOrderDetailIntoOrder
};
