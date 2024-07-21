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
import Protected from "./features/auth/components/Protected";
import AdminHome from "./pages/AdminHome";
import ProtectedAdmin from "./features/auth/components/ProtectedAdmin";


const router = createBrowserRouter([
    {
      path : '/',
      element : <Protected><HomePage/></Protected>
    },
    {
      path :'/admin',
      element : <ProtectedAdmin><AdminHome/></ProtectedAdmin>
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
      element : (<Protected><HomePage/></Protected>)
    },
    {
      path : '/movies/:movieId',
      element : <MovieDetailPage/>
    },
    {
      path : '/movies/theatres/:movieId',
      element : (<Protected><TheatrePage/></Protected>)
    },
    {
      path : '/movies/theatres/show/:showId',
      element : (<Protected><ShowPage/></Protected>)
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
