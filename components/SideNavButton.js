import React from "react";
import { Home } from "@material-ui/icons";
export default function SideNavButton({ text, icon }) {
  return (
    <div
      className={` p-2 mt-5  w-full transition flex  ${
        text ? "justify-start" : "justify-center"
      } items-center rounded-md  shadow-sm hover:shadow-blue-400 justify-start space-x-3 hover:cursor-pointer  hover:bg-blue-400`}
    >
      <div>{icon}</div>
      {text && <h3>{text}</h3>}
    </div>
  );
}
