import React from 'react'

export default function Category({icon , text}) {
    return (
        <div className="p-3 ">
            <div className="flex items-center rounded-md transition hover:bg-gray-900 hover:text-white hover:cursor-pointer ">
                <div className="mr-4  p-2 rounded-full ">
                  {icon}
                </div>
                <div className="w-full  p-2 ">{text}</div>
            </div>
        </div>
    )
}
