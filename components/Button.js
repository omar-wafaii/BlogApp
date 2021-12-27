import React from 'react'

export default function Button({text}) {
    return (
        <div className='text-sm h-8 flex items-center justify-center text-white bg-gradient-to-r from-cyan-500 to-blue-500 w-20 rounded-md transition hover:cursor-pointer hover:opacity-90'>
            <p>
                {text}
            </p>
        </div>
    )
}
