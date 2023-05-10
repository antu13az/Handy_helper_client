import { signOut } from 'firebase/auth';
import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../firebaseCredential';
import blank from "../../images/svg/blank.webp";
const Navber = ({ background,color }) => {
    const [user] = useAuthState(auth);
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
          setColorchange(true);
        } else {
          setColorchange(false);
        }
      };
      window.addEventListener("scroll", changeNavbarColor);
      const handleSingOut = () => {
        signOut(auth);
      };
    return (
      <nav style={{ background: background, color: color}}
      className={colorChange ? "nav_ber colorChange " : "nav_ber"}>

        <div className="navbar container mx-auto ">
  <div className="navbar-start ">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>ttt</a></li>
    
        <li><a>sss</a></li>
      </ul>
    </div>
    <div className="site-name">
            <h2 className="text-3xl text-bold ">
              <Link to="/">Handy Helper</Link>
            </h2>
          </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "activeStyle" : "menu-link"
                    }
                    to="/"
                  >
                    HOME
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "activeStyle" : "menu-link"
                    }
                    to="/allProducts"
                  >
                    ALL PRODUCTS
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "activeStyle" : "menu-link"
                    }
                    to="/blogs"
                  >
                    BLOGS
                  </NavLink>
                </li>

                {user && (
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "activeStyle" : "menu-link"
                      }
                      to="/dashboard/myProfile"
                    >
                      DASHBOARD
                    </NavLink>
                  </li>
                )}
    </ul>

    
  </div>
  <div className="navbar-end">
  <div className="sing-btn flex items-center gap-x-3">
              {user ? (
                <>
                  {user.photoURL ? (
                    <img
                      className="w-10 h-10 rounded-full avatar online ring ring-primary ring-offset-base-100  avater-img ml-4 lazyload"
                      src={user.photoURL}
                      alt=""
                    />
                  ) : (
                    <img
                      className="w-10 h-10 rounded-full avatar online ring ring-primary ring-offset-base-100  avater-img ml-4 lazyload"
                      data-src={blank}
                      alt=""
                    />
                  )}
                  <button onClick={handleSingOut} className="sing-in">
                    SIGN OUT
                  </button>
                </>
              ) : (
                <>
                  <Link to="/singIn">
                    <button className="sing-in">SIGN IN</button>
                  </Link>
                </>
              )}
            </div>
  </div>
</div>
      </nav>
    );
};

export default Navber;