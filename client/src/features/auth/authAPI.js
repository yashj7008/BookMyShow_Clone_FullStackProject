
export function register(fullName,role, email, password){
  return  new Promise(async (resolve,reject)=>{
    try {
      console.log("I am calling Register");
      const response = await fetch("http://localhost:5050/api/user/register", {
        method: "POST",
        body: JSON.stringify({
          fullName,
          role,
          email,
          password,

        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        // Handle invalid credentials
        alert("Successfully registered ! ");
      }
      const res = await response.json(); 
      resolve(res);
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed!");
      reject(error)
    }
  })
}


export function login(email, password){
    return  new Promise(async (resolve)=>{
        try {
            const response = await fetch("http://localhost:5050/api/user/login", {
              method: "POST",
              body: JSON.stringify({
                email,
                password,
              }),
              headers: {
                "Content-Type": "application/json",
                method: 'GET',
                credentials: 'include'
              },
            });
      
            if (!response.ok) {
              // Handle invalid credentials
              alert("Login failed!");
              
              return;
            }
            // Authentication successful, navigate to /movies
            const userData = await response.json();
            console.log(userData);
            localStorage.setItem("token" , userData.token);
            resolve(userData)
          } catch (error) {
            console.error("Login error:", error);
            alert("Login failed!");
          }
    })
}


export function checkAuth() {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch('http://localhost:5050/api/user/profile',{
        method: 'GET',
        headers :{ 'Content-Type' : 'application/json' , 'authorization' : `Bearer ${localStorage.getItem("token")}`}
      });
      if (response.ok) {
        const data = await response.json();
        resolve({ data });
      } else {
        const error = await response.text();
        reject(error);
      }
    } catch (error) {
      reject( error );
    }

  });
}

