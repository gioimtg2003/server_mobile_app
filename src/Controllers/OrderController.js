const OrderService = require('../Services/OrderService');

const createOrder =  async (req, res) => {
    try {
        let address = req.body.address;
        let user = req.body.user;
        let orderDetails = req.body.orderDetails;
        if(!address || !user || !orderDetails){
            res.status(400).json({
                code: 400,
                message: "Invalid data"
            });
            return;
        }
        await OrderService.createOrder(address, user, orderDetails, (err, order) => {
            if (err) {
                res.status(500).json({
                    code: 500,
                    message: "Internal error"
                });
            }
            else {
                res.status(200).json({
                    code: 200,
                    message: "Success",
                    data: order
                });
            }
        });
    }
    catch (err) {
        res.status(500).json({
            code: 500,
            message: "Internal error"
        });
    }
};

module.exports ={
    createOrder: createOrder
};