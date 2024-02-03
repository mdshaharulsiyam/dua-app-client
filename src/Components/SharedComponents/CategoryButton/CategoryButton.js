'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
const CategoryButton = ({ item, category, cattegoruId, setcattegoruId,subcat_id }) => {
    const { cat_name_en, no_of_subcat, no_of_dua, cat_id } = item;
    const router = useRouter()
    const [subcategoryData, setsubcategoryData] = useState([])
    const fetchData = () => {
        fetch(`https://dua-server-eight.vercel.app/subcategory?cat_id=${cat_id}`, {
        }).then((res) => res.json()).then((data) => setsubcategoryData(data))
    }
    const routing=(cat_id)=>{
        // ?category=${category}
        router.push(`/?category=${cat_id}`)
    }
    // console.log(category,cat_id)
    return (
        <>
            <div onClick={() => {
                fetchData()
                setcattegoruId(cat_id)
                routing(cat_id)
            }} className={`cursor-pointer ${category == cat_id ? 'bg-[#E8F0F5]' : 'bg-transparent'} hover:bg-[#E8F0F5] transition-all rounded-md p-1 w-full flex justify-between items-center gap-1`}>
                <span className='flex justify-start items-center gap-2'>
                    <Image src='https://i.ibb.co/0MrW2Gh/005-fever.png' height={60} width={60} alt='image' />
                    <span>
                        <h3 className={`font-semibold ${category == cat_id ? 'text-[#1FA45B]' : 'text-black'}`}>{cat_name_en}</h3>
                        <p className='text-sm'>Subcategory : {no_of_subcat}</p>
                    </span>
                </span>
                <span className='text-center text-sm text-[#7E7E7E]'>
                    <span className='font-semibold text-base text-[#393939]'>{no_of_dua}</span> <br />
                    Duas
                </span>

            </div>
            {/* ?category=${cat_id} */}
            {
                cattegoruId === cat_id && <div className=' pl-5 ml-5 border-l-2 border-dotted border-l-[#1FA45B]'>
                    {
                        subcategoryData.map(item => <Link  href={`/?category=${cat_id}&subcat_id=${item?.subcat_id}#sub${item?.subcat_id}`} key={item?._id} className={`block my-3 subCategory ${subcat_id==item?.subcat_id ? 'text-[#1FA45B]':'text-black'}`}>
                            {
                                item?.subcat_name_en
                            }
                        </Link>)
                    }
                </div>
            }
        </>
    )
}

export default CategoryButton
