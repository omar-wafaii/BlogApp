import React, { useState } from "react";
import NavMenu from "./Menu/NavMenu";
import Sidemenu from "./Menu/SideMenu";

export default function Layout({ children }) {
  const [sideNav, setsideNav] = useState(false);

  return (
    <div>
      <div className="flex justify-start">
        <div
          className={` hidden transition-all duration-100 md:block ${
            sideNav ? "w-20" : "w-96"
          }    `}
        >
          <Sidemenu
            setSideNav={setsideNav}
            sideNav={sideNav}
            className="z-50"
          />
        </div>

        <div className="w-full relative">
          <NavMenu sideNav={sideNav} setSideNav={setsideNav} />
          <div className="">
            <div
              onClick={() => setsideNav(true)}
              className={`z-40 w-full top-0 h-full ${
                sideNav ? "hidden" : "absolute"
              } md:hidden bg-black opacity-40 `}
            />

            <div
              className={`fixed top-0 left-0 transition-all z-50 h-screen duration-100  xs:w-3/4 sm:w-1/2 ${
                sideNav ? "-translate-x-full" : "translate-x-50 "
              }   md:hidden`}
            >
              <Sidemenu
                setSideNav={setsideNav}
                sideNav={sideNav}
                className="z-50"
              />
            </div>
            <div
              onClick={() => setsideNav(true)}
              className=" items-center w-full  p-2 drop-shadow bg-gray-100 "
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
