import React from "react";
import { Facebook } from "@material-ui/icons";
import { LinkedIn } from "@material-ui/icons";
import { Twitter } from "@material-ui/icons";
import { GitHub } from "@material-ui/icons";

export default function Footer() {
  return (
    <div className="mt-10 ">
      <div className="text-sm flex items-center justify-start space-x-2 mb-5">
        <div className="hover:bg-blue-400 text-white h-8 w-8 rounded-full flex items-center justify-center ">
          <Facebook />
        </div>
        <div className="hover:bg-blue-400 text-white h-8 w-8 rounded-full flex items-center justify-center ">
          <LinkedIn />
        </div>
        <div className="hover:bg-blue-400 text-white h-8 w-8 rounded-full flex items-center justify-center ">
          <Twitter />
        </div>
        <div className="hover:bg-blue-400 text-white h-8 w-8 rounded-full flex items-center justify-center ">
          <GitHub />
        </div>
      </div>

      <div className=" bg-gray-800 text-sm text-white">
        <ul className=" space-x-3 flex items-center p-2 w-full flex-wrap">
          <div>
            {" "}
            <li className="hover:cursor-pointer hover:text-red-200">Home</li>
            <li className="hover:cursor-pointer hover:text-red-200">About</li>
          </div>
          <div>
            <li className="hover:cursor-pointer hover:text-red-200">Contact us</li>
            <li className="hover:cursor-pointer hover:text-red-200">News</li>
          </div>
          <div>
            <li className="hover:cursor-pointer hover:text-red-200">Home</li>
            <li className="hover:cursor-pointer hover:text-red-200">About</li>
          </div>
        </ul>
      </div>
    </div>
  );
}
