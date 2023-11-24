const Order = require("../Models/Order").OrderSchema;
const User = require("../Models/User").UserSchema;
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

module.exports = {
    createOrder: createOrder
};
