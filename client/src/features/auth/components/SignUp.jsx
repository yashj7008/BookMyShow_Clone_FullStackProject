import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {createUserAsync} from '../authSlice'
import { useDispatch } from 'react-redux';


const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch =  useDispatch();

  const handleRegister = async (e) => {
      e.preventDefault();
      console.log(fullName,role,email, password);
       dispatch(createUserAsync({fullName, role, email, password}));
       navigate("/sign-in");
    };


  return(
    <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto py-0 h-25 w-auto"
              src="assets/bookmyshow-logo.png"
              alt="Your Company"
            />
            <h2 className="mt-0 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign Up
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
            <div>
                <label htmlFor="Fullname" className="block text-sm font-medium leading-6 text-gray-900">
                  Name 
                </label>
                <div className="mt-2">
                  <input
                    id="fullName"
                    value={fullName}
                    onChange={(e)=>{setFullName(e.target.value)}}
                    name="fullName"
                    type="text"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="Fullname" className="block text-sm font-medium leading-6 text-gray-900">
                  Role 
                </label>
                <div className="mt-2">
                  <input
                    id="role"
                    value={role}
                    onChange={(e)=>{setRole(e.target.value)}}
                    name="role"
                    type="text"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
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
                </div>
              </div>
              <div>
            
  
              <div>
                <button
                  type="submit" onClick={handleRegister}
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign Up
                </button>
               
              </div>

              </div>
            </form>
          </div>
        </div>
      </>
  )
}

export default SignUp