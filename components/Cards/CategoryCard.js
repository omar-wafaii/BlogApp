import React from 'react'
import Category from '../Category'
import {AccessibilityNew} from "@material-ui/icons/";
import {Nature} from "@material-ui/icons/";
import {Phone} from "@material-ui/icons/";
export default function CategoryCard() {
    return (
        <div className="hidden m-2 p-2 h-96 max-w-sm w-80 bg-gray-100 drop-shadow rounded-md md:block sticky">
        <h1 className='font-bold'>Category</h1>
          <div>
          <Category icon={<AccessibilityNew/>} text="life" />
          <Category icon={<Phone/>} text="Science & Technology" />
          <Category icon={<AccessibilityNew/>} text="Sports " />
          <Category icon={<Nature/>} text="Nature" />
          </div>
      </div>
    )
}
