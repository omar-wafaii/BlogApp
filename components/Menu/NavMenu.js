import React from "react";
import { Menu } from "@material-ui/icons";
export default function NavMenu({ setSideNav, sideNav }) {
  return (
    <div className="p-5 border-l-2 border-blue-400 bg-gray-900 drop-shadow text-white sticky z-40 w-full top-0">
      <div className="flex  items-center justify-between">
        {/* Burger Menu */}
        <div
          onClick={() => setSideNav(!sideNav)}
          className="text-white h-10 w-10  transition flex items-center justify-center rounded-full  hover:cursor-pointer "
        >
          <Menu />
        </div>

        {/* Logo */}
        <div className="flex justify-center items-center">
          <img
            className="h-12 w-12  object-contain"
            src={
              "https://icon-library.com/images/google-blog-icon/google-blog-icon-9.jpg"
            }
            alt="logo"
          />
        </div>

        {/* Profile View */}
        <div className="flex justify-start space-x-3 items-center w-48 ">
          <div className="border-2 border-blue-400 rounded-full">
            <img
              className="h-10 w-10  rounded-full object-cover"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="img"
            />
          </div>
          <div>
            <h1>Emily Clark</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
