import React from "react";
import { useSelector } from "react-redux";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <header className="backdrop-blur-lg rounde shadow-lg rounded-full  z-10 flex m-2 sticky-top-0 w-full fixed">
      <div className="navbar text-black dark:text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle">
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
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a href="/">Homepage</a>
              </li>
              <li>
                <a href="/organizer">Organzier</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center text-xl font-bold gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-5 h-5 ">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
            />
          </svg>
          OrganizeSphere
        </div>
        <div className="navbar-end flex gap-1 p-3 ">
          <b>
            {currentUser ? (
              <div >
                <a href="/profile" className="flex">
                  <b className="mr-3 text-xs font-bold">
                    {currentUser.username}
                  </b>
                  <img
                    className="rounded-full h-7 w-7 mr-4 shadow-lg object-cover"
                    src={currentUser.profilePicture}
                    alt="profile"
                  />
                </a>
              </div>
            ) : (
              <div className="flex ">
                <a href="/log-in" className="mr-2 ">
                  login
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 mr-2">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
               
              </div>
            )}
          </b>
        </div>
      </div>
    </header>
  );
}
