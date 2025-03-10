import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Utilities/firebase.init";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)    
    const createNewUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const signOutUser = () =>{
        return signOut(auth);
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return ()=>{
            unsubscribe();
        }
    },[])
    const signInUser = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const googleSignIn = (provider) => {
        return signInWithPopup(auth,provider);
    }
    // const googleSignIn = (provider) => {
    //     return signInWithPopup(auth,provider);
    // }
    const authInfo = {
        user,
        setUser,
        createNewUser,
        signOutUser,
        signInUser,
        googleSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;