import React from "react";
import Link from "next/link";
import { Backspace } from "@material-ui/icons";
import { Home } from "@material-ui/icons";
import SideNavButton from "../SideNavButton";
import { AddCircle } from "@material-ui/icons";
import { Settings } from "@material-ui/icons";
import { ExitToApp } from "@material-ui/icons";
import SearchInput from "../SearchInput";
import Logo from "../Logo";
import Footer from "../Sections/Footer";
const Sidemenu = ({ sideNav, setSideNav }) => {
  return (
    <div
      className={`text-sm md:text-l p-2 h-screen  z-50  bg-gray-900 left-0 top-0 sticky shadow-lg shadow-slate-400 `}
    >
      {/* top */}
      <div className="w-full p-1 text-white flex md:hidden  space-x-2 justify-between items-center ">
        <div
          onClick={() => setSideNav(!sideNav)}
          className="text-white h-10 w-10 flex transition items-center justify-center rounded-full hover:cursor-pointer hover:text-black"
        >
          <Backspace />
        </div>
        <div className="pt-2">
          <Logo size={""} />
        </div>
      </div>

      {/* Desktop */}
      {sideNav ? (
        <div className="hidden md:block">
          {/* Nav List */}
          <Logo size={"medium"} />

          <div className=" flex justify-center items-center w-full mt-20">
            <div className="text-white  space-y-3 w-full">
              <Link href="/">
                <a>
                  <SideNavButton icon={<Home />} />
                </a>
              </Link>
              <Link href="/AddBlog">
                <a>
                  <SideNavButton icon={<AddCircle />} />
                </a>
              </Link>
              <Link href="/Settings">
                <a>
                  <SideNavButton icon={<Settings />} />
                </a>
              </Link>
              <Link href="/SingIn">
                <a>
                  <SideNavButton icon={<ExitToApp />} />
                </a>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="hidden md:block">
          {/* Nav List */}
          <Logo size={"medium"} />

          <div className="mt-4 w-full">
            <SearchInput />
          </div>

          <div className=" flex justify-center items-center w-full mt-10">
            <div className="text-white  space-y-3 w-full">
            <Link href="/">
                <a>
                  <SideNavButton icon={<Home />} text={"Home"} />
                </a>
              </Link>
              <Link href="/AddBlog">
                <a>
                  <SideNavButton icon={<AddCircle />}  text={"Add A Blog"} />
                </a>
              </Link>
              <Link href="/Settings">
                <a>
                  <SideNavButton icon={<Settings />} text={"Settings"}/>
                </a>
              </Link>
              <Link href="/SignIn">
                <a>
                  <SideNavButton icon={<ExitToApp />}  text={"Logout"}/>
                </a>
              </Link>
            </div>
          </div>
             {/* Desktop Footer */}
            <Footer/>
        </div>
      )}

      {/* mobile side menu */}
      <div className="block md:hidden">
        {/* Avatar */}
        <div className=" flex items-center   justify-center mt-10">
          <div className="border-2 drop-shadow rounded-full border-blue-300">
            <img
              className="h-14 w-14  rounded-full object-cover"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="Avatar"
            />
          </div>
        </div>

        {/* User Name and Email */}
        <div className="flex justify-center items-center  w-full mt-5 ">
          <div className="text-white  ">
            <h1 className="text-xl font-bold text-center">User Name</h1>
            <h2 className="text-center text-gray-400">email@gmail.com</h2>
          </div>
        </div>

        {/* search  */}
        <div className="mt-4">
          <SearchInput />
        </div>

        {/* Nav List */}
        <div className=" flex justify-start items-center w-full mt-10">
          <div className="text-white space-y-3 w-full">
            <Link href="/">
                <a>
                  <SideNavButton icon={<Home />} text={"Home"} />
                </a>
              </Link>
              <Link href="/AddBlog">
                <a>
                  <SideNavButton icon={<AddCircle />}  text={"Add A Blog"} />
                </a>
              </Link>
              <Link href="/Settings">
                <a>
                  <SideNavButton icon={<Settings />} text={"Settings"}/>
                </a>
              </Link>
              <Link href="/SignIn">
                <a>
                  <SideNavButton icon={<ExitToApp />}  text={"Logout"}/>
                </a>
              </Link>
          </div>
        </div>
       
        {/* Mobile Footer */}
        <Footer/>
      </div>
    </div>
  );
};

export default Sidemenu;
