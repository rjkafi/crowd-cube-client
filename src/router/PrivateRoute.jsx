import {  useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location=useLocation();
    // console.log(location);
    if(loading){
        return <div className="flex mt-28 py-24 flex-col justify-center items-center">
            <span className="loading loading-bars loading-lg"></span>
        </div>

    }
    if(user && user?.email ){
        return children;
    }

    return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default PrivateRoute;