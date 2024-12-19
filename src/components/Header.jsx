import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Header = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [showModal,setShowModal]=useState(false);

  const links = (
    <>
      <li><NavLink to='/'
        className={({ isActive }) =>
          isActive
            ? "text-blue-500 border-b-2 border-blue-500 bg-transparent"
            : "text-gray-700 hover:border-b-2 hover:border-blue-500 bg-transparent"
        }
      >Home</NavLink></li>
      <li><NavLink to='/allcampaign'
        className={({ isActive }) =>
          isActive
            ? "text-blue-500 border-b-2 border-blue-500 bg-transparent"
            : "text-gray-700 hover:border-b-2 hover:border-blue-500 bg-transparent"
        }
      >All Campaign</NavLink></li>
      <li><NavLink to='/addcampaign'
        className={({ isActive }) =>
          isActive
            ? "text-blue-500 border-b-2 border-blue-500 bg-transparent"
            : "text-gray-700 hover:border-b-2 hover:border-blue-500 bg-transparent"
        }
      >Add New Campaign</NavLink></li>
      <li><NavLink to='/mycampaign'
        className={({ isActive }) =>
          isActive
            ? "text-blue-500 border-b-2 border-blue-500 bg-transparent"
            : "text-gray-700 hover:border-b-2 hover:border-blue-500 bg-transparent"
        }
      >My Campaign</NavLink></li>
      <li><NavLink to='/mydonation'
        className={({ isActive }) =>
          isActive
            ? "text-blue-500 border-b-2 border-blue-500 bg-transparent"
            : "text-gray-700 hover:border-b-2 hover:border-blue-500 bg-transparent"
        }
      >My Donations</NavLink></li>
    </>
  );

  return (
    <>
      <nav className="navbar bg-base-300 py-5 sticky top-0 z-[1000] bg-transparent backdrop-blur-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl text-orange-600">Crowd<span className='text-slate-800'>cube</span></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          {
            user && user?.email ? <div className='flex items-center space-x-2'>
              <div className='relative'
                 onMouseEnter={()=> setShowModal(true)}
                 onMouseLeave={()=>setShowModal(false)}
              >
               <img
                className="h-12 w-12 rounded-full cursor-pointer"
                src={user.photoURL} alt="user" />
                {
                  showModal &&(
                    <div className="absolute right-0 mt-1  w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border dark:border-gray-700">
            <div className="p-4">
              <p className="text-sm text-center font-medium text-gray-700 dark:text-gray-300">
                {user.displayName}
              </p>
              <button
                className="mt-2 w-full text-center font-bold text-lg bg-blue-500 hover:bg-red-600 text-white py-2 rounded-lg"
                onClick={signOutUser}
              >
                Logout
              </button>
            </div>
          </div>
                  )
                }

              </div>
            </div> : <div className="join">
              <NavLink to='/login'
                className={({ isActive }) =>
                  `btn join-item ${isActive ? "bg-blue-500 text-white" : "bg-gray-400"}`
                }
              > Login</NavLink>
              <NavLink to='/register'
                className={({ isActive }) =>
                  `btn join-item ${isActive ? "bg-blue-500 text-white" : 'bg-gray-400'}`
                }
              >Register</NavLink>
            </div>
          }
        </div>
      </nav>
    </>
  );
};

export default Header;
