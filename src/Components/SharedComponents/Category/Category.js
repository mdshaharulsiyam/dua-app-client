'use client'
import { useEffect, useState } from 'react';
import CategoryButton from '../CategoryButton/CategoryButton';
import { IoSearchOutline } from 'react-icons/io5';

const Category = ({ category }) => {
    const [Categories,setCategoris]=useState([])
    useEffect(() => {
        const fetchData = async() => {
            const res = await fetch('http://localhost:5000/category', {
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'GET',
                next: { revalidate: 1 }
            });
            const data = await res.json();
            setCategoris(data)
        }
        fetchData()
    })

    // console.log(data)
    const [cattegoruId, setcattegoruId] = useState('')
    return (
        <div className='w-[400px] rounded-lg bg-white  mt-5 h-screen overflow-auto'>
            <p className='text-base mb-3 text-center font-semibold py-2 w-full text-white rounded-t-[8px] bg-[#1FA45B]'>Categories</p>
            <form className="flex items-center w-[320px] mx-auto justify-center gap-1 border bg-white p-1 pl-4 rounded-md">
                <button className="p-2 rounded-md" type="submit">
                    <IoSearchOutline />
                </button>
                <input className="outline-none w-[300px]" type="text" placeholder="Search by Categories" />
            </form>
            <div className='p-3 flex justify-start items-start gap-4 flex-col'>
                {
                    Categories.map(item => <CategoryButton key={item?._id} cattegoruId={cattegoruId} setcattegoruId={setcattegoruId} category={category} item={item} />)
                }
            </div>
        </div>
    )
}

export default Category
