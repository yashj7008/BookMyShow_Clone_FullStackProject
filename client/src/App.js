import  React from "react";
import  ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignIn from './components/SignIn';
import Register from './components/Register';
import MovieList from './components/MovieList';
import DashboardLayout from './layouts/DashboardLayout'
import  './App.css';
import TheatreList from "./components/TheatreList";
import Show from './components/Show'

const router = createBrowserRouter([
    {
      path : '/',
      element : <DashboardLayout title={"Home Page "}>Dashboard !</DashboardLayout>
    },
    {
      path : '/sign-in',
      element : <SignIn/>
    },
    {
      path : '/register',
      element : <Register/>
    },
    {
      path : '/movies',
      element : <DashboardLayout title={"Movies"}><MovieList/></DashboardLayout>
    },
    {
      path : '/movies/:movieId',
      element : <DashboardLayout title={"Theatres"}><TheatreList/></DashboardLayout>
    },
    {
      path : '/show/:showId',
      element : <DashboardLayout title={"Shows"}><Show/></DashboardLayout>
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
