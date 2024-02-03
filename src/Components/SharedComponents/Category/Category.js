'use client'
import { useEffect, useState } from 'react';
import CategoryButton from '../CategoryButton/CategoryButton';
import { IoSearchOutline } from 'react-icons/io5';

const Category = ({ category,subcat_id }) => {
    const [Categories, setCategoris] = useState([])
    const [loading, setloading] = useState(true)
    const [search,setsearch]=useState('')
    useEffect(() => {
        setloading(true)
        const fetchData = async () => {
            const res = await fetch(`https://dua-server-eight.vercel.app/category?category=${search}`, {
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'GET',
                next: { revalidate: 1 }
            });
            const data = await res.json();
            setCategoris(data)
            setloading(false)
        }
        fetchData()
    },[search])

    // console.log(data)
    const [cattegoruId, setcattegoruId] = useState('')
    return (
        <div className='w-[400px] rounded-lg bg-white  mt-5 h-screen overflow-auto'>
            <p className='text-base mb-3 text-center font-semibold py-2 w-full text-white rounded-t-[8px] bg-[#1FA45B]'>Categories</p>
            <form className="flex items-center w-[320px] mx-auto justify-center gap-1 border bg-white p-1 pl-4 rounded-md">
                <button disabled className="p-2 rounded-md" type="submit">
                    <IoSearchOutline />
                </button>
                <input onInput={(e)=>setsearch(e.target.value)} className="outline-none w-[300px]" type="text" placeholder="Search by Categories" />
            </form>
            <div className='p-3 flex justify-start items-start gap-4 flex-col relative'>
                {
                    loading && <div className="flex items-center justify-center space-x-2 absolute top-32 left-[50%] translate-x-[-50%] ">
                        <div className="w-4 h-4 rounded-full animate-pulse bg-black"></div>
                        <div className="w-4 h-4 rounded-full animate-pulse bg-black"></div>
                        <div className="w-4 h-4 rounded-full animate-pulse bg-black"></div>
                    </div>
                }

                {
                    Categories.map(item => <CategoryButton subcat_id={subcat_id} key={item?._id} cattegoruId={cattegoruId} setcattegoruId={setcattegoruId} category={category} item={item} />)
                }
            </div>
        </div>
    )
}

export default Category
