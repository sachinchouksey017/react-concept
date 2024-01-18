import React from 'react'
import {Navigate, useLocation} from "react-router-dom"

const ProtectedRoute = ({children}) => {
    let isAuthenticated = sessionStorage.getItem('isAuthenticated') ?? false;
    let location = useLocation();

    if(!isAuthenticated) {
        return <Navigate to="/login" state={{ from: location}} replace />
    }
 return children

};

export default ProtectedRoute;