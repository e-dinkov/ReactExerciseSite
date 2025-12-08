import { useEffect } from "react";
import { Navigate } from "react-router";

export default function Logout({  logoutHandler }) {
   useEffect(() => {
       logoutHandler();
   }, []);
        
        
    
    return <Navigate to="/"/>
}