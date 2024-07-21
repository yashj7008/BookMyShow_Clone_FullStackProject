import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import {useEffect} from   'react';
import { selectLoggedInUser , checkAuthAsync} from '../authSlice';

const Protected = ({children}) => {
    const user = useSelector(selectLoggedInUser);
     const dispatch = useDispatch();
    useEffect(()=>{
      //if(Cookies.get("token")){
        dispatch(checkAuthAsync());
     // }
    },[])

    if (!user) {
      return <Navigate to="/sign-in" replace={true}></Navigate>;
    }
    return children;
}

export default Protected