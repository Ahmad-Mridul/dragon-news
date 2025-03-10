import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Utilities/firebase.init";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    const createNewUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const signOutUser = () =>{
        setLoading(true)
        return signOut(auth);
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        });
        return ()=>{
            unsubscribe();
        }
    },[])
    const signInUser = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const googleSignIn = (provider) => {
        setLoading(true)
        return signInWithPopup(auth,provider);
    }
    const updateInfo = (updatedInfo) => {
        return updateProfile(auth.currentUser,updatedInfo)
    }
    const authInfo = {
        user,
        setUser,
        createNewUser,
        signOutUser,
        signInUser,
        googleSignIn,
        loading,
        updateInfo
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;