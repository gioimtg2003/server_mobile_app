const UserService = require('../Services/UserService');

const getOrderByUserId = async (req, res) => {
    const {userId} = req.params;
    if(!userId){
        res.status(200).json({
            code: 200,
            message: "Invalid data"
        });
        return;
    };
    await UserService.getOrderByUserId(userId, (err, orders) => {
        if (err) {
            res.status(200).json({
                code: 200,
                message: "Internal error"
            });
        }
        else {
            res.status(200).json({
                code: 200,
                message: "Success",
                data: orders
            });
        }
    });
};

module.exports ={
    getOrderByUserId: getOrderByUserId
};