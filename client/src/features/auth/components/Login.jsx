import { useState } from "react";
import { Await, Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUserAsync,selectLoggedInUser , selectError} from "../authSlice";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);
  const error = useSelector(selectError);
 


  const handleLogin = async (e) => {
    e.preventDefault();
     await dispatch(loginUserAsync({email, password}))
     
  };

    return (
      <> 
         {user && <Navigate to="/" replace={true}></Navigate>}
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto py-0 h-25 w-auto"
              src="assets/bookmyshow-logo.png"
              alt="Your Company"
            />
            <h2 className="mt-0 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    value={email}
                    onChange={(e)=>{setEmail(e.target.value)}}
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    value={password}
                    onChange={(e)=>{setPassword(e.target.value)}}
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {error && <div>
                    <p className="text-red-500">{error.message}</p>
                    </div>}
                </div>
              </div>
              <div>
            
  
              <div>
                <button
                  type="submit" onClick={handleLogin}
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
               
              </div>
              <div className="mt-2">
                <Link to="/sign-up">
                    <button
                      type="submit" 
                      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                    Create new account
                    </button>
                </Link>
                
              </div>

              </div>
            </form>
          </div>
        </div>
      </>
    )
  }
  