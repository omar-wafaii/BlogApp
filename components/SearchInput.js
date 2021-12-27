import React from "react";
import { Search } from "@material-ui/icons";
export default function SearchInput() {
  return (
    <div className="w-full bg-gray-800 flex space-x-5 p-2 rounded-md  ">
      <div className="text-white">
        <Search />
      </div>
      <input
        type="text"
        placeholder="Search..."
        className="outline-none text-white bg-gray-800 w-3/4"
      />
    </div>
  );
}
