const AuthService = require('../Services/AuthService');
const Login = async (req, res) => {
    try{
        const {email, password} = req.body;
        if (!email || !password){
            return res.json({
                code: 400,
                message: "Thiếu thông tin đăng nhập" ,
                data: {}
            });
        }else{
            AuthService.Login(email, password, (err, user) => {
                if (err){
                    return res.json({
                        code: 401,
                        message: "Mật khẩu hoặc email không đúng",
                        data: {}
                    });
                }
                return res.status(200).json({
                    code: 200,
                    message: "Đăng nhập thành công",
                    data: user
                });
                
            });
        }

    } catch(err){
        return res.status(500).send({
            code: 500,
            message: err.message || "Lỗi server",
            data: {}
        });
    }
};
const Register = async (req, res) => {
    try {
        const {name, email, phone, password} = req.body;
        if (!email || !phone || !password || !name){
            return res.json({
                code: 400,
                message: "Thiếu thông tin đăng ký",
                data: {}
            });
        }else{
            AuthService.Register(name, email, phone, password, (err, user) => {
                if (err){
                    return res.json({
                        code: 400,
                        message: err,
                        data: {}
                    });
                }
                return res.status(200).json({
                    code: 200,
                    message: "Đăng ký thành công",
                    data: user
                });
            });
        }
    } catch (error) {
        return res.send({
            code: 500,
            message: err.message || "Lỗi server",
            data: {}
        });
    }
};
module.exports = {
    Login : Login,
    Register : Register
};