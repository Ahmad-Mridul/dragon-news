import { useContext } from "react";
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../AuthProvider/AuthProvider";
import SocialLogin from "./SocialLogin";

const Login = () => {
    const {signInUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogin=(e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInUser(email,password)
        .then((result)=>{
        })
        .catch(error=>{

        })
        e.target.reset();
        navigate("/");
    }
    return (
        <div className="w-[400px] mx-auto my-40 bg-base-200">
                <div className="card bg-base-100 max-w-lg  shadow-2xl">
                    <div className="card-body">
                        <h2 className="text-2xl text-center">Login your account</h2>
                        <form onSubmit={handleLogin}>
                            <fieldset className="fieldset">
                                <label className="fieldset-label">Email</label>
                                <input name="email" type="email" className="input" placeholder="Email" />
                                <label className="fieldset-label">Password</label>
                                <input name="password" type="password" className="input" placeholder="Password" />
                                <div>
                                    <a className="link link-hover">Forgot password?</a>
                                </div>
                                <button className="btn btn-neutral mt-4">Login</button>
                            </fieldset>
                        </form>
                        <SocialLogin></SocialLogin>
                        <p>Don't have an account? <NavLink className="text-red-400" to="/auth/register">Register</NavLink></p>
                    </div>
                </div>
        </div>
    );
};

export default Login;
