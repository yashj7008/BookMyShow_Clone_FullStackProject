 

 const authorizedRoles =(...allowedUsers)=> (req, res, next)=>{
    try {
         //get the role 
         const role = req.user.role;
         //if current role is allowed to to create the movie 
          //const allowedUsers = ['Admin', 'SuperAdmin'];
       if(!allowedUsers.includes(role)){
          return res.status(403).send("You are not authorized !");
        }
        next();
        
    } catch (error) {
        return res.status(500).send(error);
    }
       
 }
 
 export default authorizedRoles;