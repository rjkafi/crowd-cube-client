import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";



export const AuthContext=createContext();
const auth=getAuth(app)
const googleProvider=new  GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);

    // Create A new User
    const createUser= (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
         }
    // Sign In With Google   
    const signInWithGoogle = ()=>{

        return signInWithPopup(auth,googleProvider)
            
        .then(result =>{
            const user=result.user;
            setUser(user);
        }).catch(error => {
            console.error("Google login failed:", error.message);

        });
         
    }
    // signout
    const signOutUser = () =>{
        setLoading(true)
        return signOut(auth)
    }

    const authInfo={
        user,
        setUser,
        createUser,
        signInWithGoogle,
        signOutUser,
        loading,setLoading
        
   }

    useEffect( ()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser =>{
             setUser(currentUser);
             setLoading(false)
         })
         
         return  ()=> {
             unSubscribe()
         }
        },[])


    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;