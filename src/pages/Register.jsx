import { useContext, useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Register = () => {
const [showPassword,setShowPassword]=useState(false);
const [error,setError]=useState({})
const {createUser,setUser}=useContext(AuthContext);
const location=useLocation();
const navigate=useNavigate();


const handleToSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photoURL, email, password);
  
    // Password validation
    if (password.length < 6) {
      setError({ ...error, password: "Password must be at least 6 characters." });
      return;
    } else if (!/[A-Z]/.test(password)) {
      setError({ ...error, password: "At least one uppercase letter must be included." });
      return;
    } else if (!/[a-z]/.test(password)) {
      setError({ ...error, password: "At least one lowercase letter must be included." });
      return;
    } else {
      setError({ ...error, password: null });
    }
  
    // Create user
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log("User created successfully:", user);
        navigate(location.state ? location.state : "/");
      })
      .catch((err) => {
        console.error("Error during registration:", err);
        setError({...error, password:err.code}); 
      });
  };
  




    const togglePassword = (e) => {
        e.preventDefault(); 
        setShowPassword(!showPassword);
      };
    
    return (
        <>
         <div className=" min-h-screen justify-center items-center">
  <div className="hero-content flex-col justify-center ">
    <div className="card py-10 bg-base-100 w-full max-w-xl shrink-0 shadow-2xl">
        <h3 className="text-3xl font-bold text-center">Register Your Account</h3>
      <form onSubmit={handleToSubmit}  className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input name="name" type="text" placeholder="name" 
          className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" placeholder="photo URL" 
          name="photoURL"
          className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" 
          name="email"
          className="input input-bordered" required />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input 
          type={showPassword ? 'text' : 'password'} 
          placeholder="password"
          name="password" 
          className="input input-bordered" required />
          <button 
          onClick={togglePassword}
          className=" absolute right-4 top-12 text-xl">
            { showPassword ?  <IoMdEyeOff></IoMdEyeOff> :  <IoMdEye></IoMdEye> }
          </button>
          

        </div>
        {
            error.password && (
              <label className="label">
            <span className="label-text text-xs text-red-600">{ error.password}</span>
          </label>
            )
           }
        <div className="form-control mt-6">
          <button className="btn bg-blue-400 text-white text-lg font-semibold w-full">Register</button>
        </div>
      </form>
      <p className="text-gray-400 px-5 text-center flex items-center justify-center">
  <span className="flex-1 border-t border-gray-300 "></span>
  <span className="px-4">or</span>
  <span className="flex-1 border-t border-gray-300 "></span>
</p>
      <p className="text-center font-semibold">Already have an Account ?<Link
      className="text-red-600"
      to='/login'>Login</Link></p>
    </div>
  </div>
      </div>
            
        </>
    );
};

export default Register;