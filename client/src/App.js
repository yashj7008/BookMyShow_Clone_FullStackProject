import  React from "react";
import  ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import  './App.css';
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import MovieDetailPage from "./pages/MovieDetailPage";
import ShowPage from "./pages/ShowPage";
import UserProfilePage from './pages/UserProfilePage'
import TheatrePage from "./pages/TheatrePage";



const router = createBrowserRouter([
    {
      path : '/',
      element : <HomePage/>
    },
    {
      path : '/sign-in',
      element : <SignInPage/>
    },
    {
      path : '/sign-up',
      element : <SignUpPage/>
    },
    {
      path : '/user-profile',
      element : <UserProfilePage/>
    },
    {
      path : '/movies',
      element : <HomePage/>
    },
    {
      path : '/movies/:movieId',
      element : <MovieDetailPage/>
    },
    {
      path : '/movies/theatres/:movieId',
      element : <TheatrePage/>
    }


  ])


function App() {
  return (
    <div className="App">
       <RouterProvider router={router}/>
    </div>
  )
}

export default App;
