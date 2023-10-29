import React, { Children } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import ToDo from '../ToDoApp/ToDo';
const ProtectedRoute = ({children}) => {
    const auth=localStorage.getItem("usertoken")
    if(auth!==null)
    {
        return children
    }else{

        return  <Navigate to='/login'/>
    }
}

export default ProtectedRoute;
