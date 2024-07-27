import jwt from 'jsonwebtoken';

const isLoggedIn = (req, res, next) => {
    try {
        console.log(req.headers);
        const token = req.headers.authorization.split(" ")[1];
        console.log("this is bearer token from header", token);
        const tokenDetails = jwt.verify(token, process.env.JWT_PASSWORD);
        console.log('tokenDetails', tokenDetails);
        if (!token || !tokenDetails) {
            res.status(401).send('Login is required!');
            return;
        }
        req.user = tokenDetails;
        next();
        
    } catch (error) {
        res.status(401).send("Unauthorized : No token provided", error);
        console.log(error);
    }
   
}

export default isLoggedIn;