'use client'
import React from 'react'
import { IoSettingsSharp } from 'react-icons/io5'

const Button = () => {
    const showSideber = () => {
        const setting = document.getElementById('setting')
        if (setting.style.right == '-999999px') {
            setting.style.right = '0'
        } else {
            setting.style.right = '-999999px'
        }
        //right-[-999999px]

    }
    return <button onClick={() => showSideber()} className="text-2xl text-green-600">
        <IoSettingsSharp />
    </button>
}

export default Button
