 import User  from "../model/user.model.js"
 import bcrypt from 'bcryptjs'
 import jwt from 'jsonwebtoken'


 const register  = async(req, res)=>{
  try {
    const UserData = req.body;
    UserData.password = await bcrypt.hash(UserData.password, 10)
    const data = await User.create(UserData);
    res.status(200).send({status : true, message : "Successfully registered !"});
    
  } catch (error) {
    res.status(500).send({status : false, message : "Internal Server Error"});
    
  }
   

}



const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const UserData = await User.findOne({ email: email.toLowerCase()}).select('+password');

    if (!UserData) {
      res.status(401).send({ status: false, message: "Invalid Credentials" });
      return;
    }

    const isPasswordValid = await bcrypt.compare(password, UserData.password);

    if (!isPasswordValid) {
      res.status(401).send({ status: false, message: "Invalid Credentials" });
      return;
    }

    // generate JWT Token
    const jwtToken = await UserData.generateJWTToken();
    // res.cookie('token', jwtToken, {
    //   secure : false,
    //   maxAge: 2 * 24 * 60 * 60 * 1000,
    //   httpOnly : true,
    //   domain : 'http://localhost:3000'
    // });
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
   
    
    

    
    
  
    res.status(200).send({ status: true, message: "Successfully LoggedIn" ,
  token : jwtToken});
  } catch (error) {
    console.log(error);
    res.status(500).send({ status: false, message: "Internal Server Error" });
  }
};

//  const getProfile  =async (req, res)=>{
//     //const {token } = req.cookies;
//     //console.log(token);
//     try {
//         //const tokenDetails = jwt.verify(token, process.env.JWT_PASSWORD);
//         //console.log('Token Details:', tokenDetails);
//        // const userDetails = await User.findById(tokenDetails.id);
//         const userId = req.user.id;
//         const userDetails = await User.findById(userId);
//         res.status(200).send(userDetails);
//       } catch (error) {
//         console.log('Token Verification Error:', error.message);
//         res.status(401).send({ status: false, message: 'Invalid Token' });
//       }

     const getProfile = async (req, res) => {
        const userId = req.user.id;
        const userDetail = await User.findById(userId);
        res.status(200).send(userDetail);
    }


export {register, login , getProfile}