import React from 'react'
import CategoryButton from '../CategoryButton/CategoryButton';
import { IoSearchOutline } from 'react-icons/io5';

const Category = async ({ category }) => {
    const res = await fetch('http://localhost:5000/category', {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'GET',
        next: { revalidate: 1 }
    });

    const data = await res.json();
    console.log(data)
    return (
        <div className='w-[24%] rounded-lg bg-white  mt-5 '>
            <p className='text-base mb-3 text-center font-semibold py-2 w-full rounded-t-[8px] bg-[#1FA45B]'>Categories</p>
            <form className="flex items-center w-[90%] mx-auto justify-center gap-1 border bg-white p-1 pl-4 rounded-md">
                <button className="p-2 rounded-md" type="submit">
                    <IoSearchOutline />
                </button>
                <input className="outline-none" type="text" placeholder="Search by Categories" />
            </form>
            <div className='p-3 flex justify-start items-start gap-4 flex-col'>
                {
                    data.map(item => <CategoryButton key={item?._id} category={category} item={item} />)
                }
            </div>
        </div>
    )
}

export default Category
