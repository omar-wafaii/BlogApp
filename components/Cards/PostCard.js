import React from "react";
const Postcard = ({ banner, body , user  }) => {
  return (
    <div  className="w-72 text-sm rounded-md bg-gray-100 drop-shadow cursor-pointer transition hover:scale-105   m-2 ">
      {/* image */}
      <div className="bg-black w-full  ">
        <img className="object-cover rounded-md w-full h-36 z-0 " src={banner} alt="image" />
      </div>

      <div className="pl-3 pb-2 z-10">
        {/* tags */}
        <div className="my-3 w-10 flex justify-center items-center">
          <h6 className="text-xs bg-blue-400 text-white rounded-md p-1">
            A Tag
          </h6>
        </div>

        {/* body */}
        <div className=" my-1 h-20">
          <p>
            {body}
          </p>
        </div>

        {/* profile */}
        <div className="flex items-center w-full justify-start">
          <div className="mr-4 w-10  ml-1">
            <img
              className=" bg-white w-10 rounded-full h-10 object-cover "
              src={user?.image}
              alt="person"
            />
          </div>
          <div>
            <h6 className="text-xs"> {user?.name} </h6>
            <p className="text-xs text-gray-400">{user?.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Postcard;
