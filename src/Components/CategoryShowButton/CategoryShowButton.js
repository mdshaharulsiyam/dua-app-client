'use client'
import React from 'react'
import { MdOutlineMenu } from 'react-icons/md'

const CategoryShowButton = () => {
    const showCategory = () => {
        const category = document.getElementById('categoryMenu')
        if (category.style.left == '-999999px') {
            category.style.left = '0'
        } else {
            category.style.left = '-999999px'
        }
    }
    return <button onClick={() => showCategory()}>
        <MdOutlineMenu  className="text-2xl" />
    </button>
}

export default CategoryShowButton
