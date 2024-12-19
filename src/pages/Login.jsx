import { useContext, useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link, useLocation, useNavigate} from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    
    const {signInWithGoogle}=useContext(AuthContext);
    const location=useLocation();
    const navigate=useNavigate();

    const handleGoogleLogin= e =>{
        e.preventDefault();
        signInWithGoogle();
        navigate(location.state ? location.state : '/')
    }
    const togglePassword = (e) => {
        e.preventDefault();
        setShowPassword(!showPassword);
      };
    
    return (
        <>
           <div>
      <div className="min-h-screen justify-center items-center">
        <div className="hero-content flex-col justify-center ">
          <div className="card py-10 bg-base-100 w-full max-w-xl shrink-0 shadow-2xl">
            <h3 className="text-3xl font-bold text-center">Login Your Account</h3>
            <div className="space-y-3 mt-9 mb-4">
            <div className="px-2  text-center justify-center">
              <button onClick={handleGoogleLogin}  className="btn btn-wide">
                <img
                  className="w-7 h-7"
                  src="https://img.icons8.com/?size=96&id=17949&format=png"
                  alt=""
                />
                Login with Google
              </button>
            </div>
            <p className="text-lg text-gray-400 px-5 text-center flex items-center justify-center">
              <span className="flex-1 border-t border-gray-300"></span>
              <span className="px-4">or</span>
              <span className="flex-1 border-t border-gray-300"></span>
            </p>

            </div>
            <form  className="px-8">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPassword ? 'text' : 'password'} 
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <button onClick={togglePassword}  className="absolute right-4 top-12 text-xl">
                { showPassword ?  <IoMdEyeOff></IoMdEyeOff> :  <IoMdEye></IoMdEye> }
                </button>
                
                <label className="label">
                <Link
        className="label-text-alt link link-hover text-blue-500"
    >
        Forgot password?
    </Link>
                </label>
              </div>
              <div className="form-control mt-6 mb-3">
                <button className="btn bg-blue-400 text-white text-lg font-semibold w-full">Login</button>
              </div>
            </form>
           
            <p className="text-center font-semibold">
              Don't have an Account?{" "}
              <Link className="text-red-600" to="/register">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>  
        </>
    );
};

export default Login;