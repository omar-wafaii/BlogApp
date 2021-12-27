import React from 'react'

export default function Logo({size}) {
    return (
        <div className="flex justify-center items-center">
        <img className={` ${size == "medium" ? "h-16 w-16" : "h-10 w-10"} object-contain `}  src={"https://icon-library.com/images/google-blog-icon/google-blog-icon-9.jpg"} alt="logo" />
        </div>
    )
}
