/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Register = () => {
    const {createNewUser,setUser, signOutUser,updateInfo} = useContext(AuthContext);   
    const [error,setError] = useState("");
    const navigate = useNavigate(); 
    const handleLogin=(e)=>{
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get("name");
        if(name.length<5){
            setError("Name must be longer than 5 characters");
            return
        }
        const photo = form.get("photo");
        const email = form.get("email");
        const password = form.get("password");
        const updatedInfo = {
            displayName:name,
            photoURL:photo
        }
        createNewUser(email,password)
        .then((result)=>{
            updateInfo(updatedInfo)
            .then((result)=>{

            })
            .catch(error=>{

            })
            signOutUser()
            .then((result)=>{

            })
            .catch((error)=>{
                
            })
        })
        .catch(error=>{
            
        })
        e.target.reset();
        navigate("/auth/login")
    }
    return (
        <div className="w-[400px] mx-auto my-40 bg-base-200">
                <div className="card bg-base-100  shadow-2xl">
                    <div className="card-body">
                        <h2 className="text-2xl text-center">Register your account</h2>
                        <form onSubmit={handleLogin}>
                            <fieldset className="fieldset">
                                <label className="fieldset-label">Name</label>
                                <input name="name" type="text" className="input" placeholder="Name" />
                                {
                                    error && <p className="text-red-500">{error}</p>
                                }
                                <label className="fieldset-label">Photo URL</label>
                                <input name="photo" type="text" className="input" placeholder="photo url" />
                                <label className="fieldset-label">Email</label>
                                <input name="email" type="email" className="input" placeholder="Email" />
                                <label className="fieldset-label">Password</label>
                                <input name="password" type="password" className="input" placeholder="Password" />
                                <div>
                                    <a className="link link-hover">Forgot password?</a>
                                </div>
                                <button className="btn btn-neutral mt-4">Register</button>
                            </fieldset>
                        </form>
                        <p>Already have an account? <NavLink className="text-red-400" to="/auth/login">Login</NavLink></p>
                    </div>
                </div>
        </div>
    );
};

export default Register;