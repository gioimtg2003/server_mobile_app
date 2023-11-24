const User = require("../Models/User").UserSchema;

const getOrderByUserId = async (userId, done) => {
    try {
        let user = await User.findById(userId).populate({
            path: 'orders',
            populate: {
                path: 'orderDetails.Product'
            }
        });
        done(null, user.orders);
    } catch (err) {
        done(err, null);
    }
};

module.exports = {
    getOrderByUserId: getOrderByUserId
};