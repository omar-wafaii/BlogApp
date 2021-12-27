import React from "react";

export default function Section({ children }) {
  return (
    <div className=" max-w-screen-2xl w-full">
      <div className="flex justify-evenly">
          {children}
      </div>
    </div>
  );
}
