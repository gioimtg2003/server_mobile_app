const User = require("../Models/User").UserSchema;

const Login = async (email, password, done) => {
    try{
       let findUser = await User.findOne({email}).select({__v: 0});
       if(findUser && findUser.password === password){
           done(null, findUser);
         }else{
           done("Error", null);
         }
    } catch(err){
        done(err, null);
    }
};
const Register = async (name, email, phone, password, done) => {
    try{
        let findUser = await User.findOne({email});
        if(findUser){
            done(email + " Đã được sử dụng", null);
            return;
        }
        let newUser = new User({
            name: name,
            email: email,
            phone: phone,
            password: password 
        });
        let user = await newUser.save();
        done(null, user);
    } catch(error) {
        done(error, null)
    }
};
module.exports = {
    Login : Login,
    Register : Register
};