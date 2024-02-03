'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
const CategoryButton = ({ item, category, cattegoruId, setcattegoruId }) => {
    const { cat_name_en, no_of_subcat, no_of_dua, cat_id } = item;
    const [subcategoryData, setsubcategoryData] = useState([])
    const fetchData = () => {
        fetch(`http://localhost:5000/subcategory?cat_id=${cat_id}`, {
        }).then((res) => res.json()).then((data) => setsubcategoryData(data))
    }
    return (
        <>
            <div onClick={() => {
                fetchData()
                setcattegoruId(cat_id)
            }} className={`cursor-pointer ${category === cat_name_en ? 'bg-[#E8F0F5]' : 'bg-transparent'} hover:bg-[#E8F0F5] transition-all rounded-md p-1 w-full flex justify-between items-center gap-1`}>
                <span className='flex justify-start items-center gap-2'>
                    <Image src='https://i.ibb.co/0MrW2Gh/005-fever.png' height={60} width={60} alt='image' />
                    <span>
                        <h3 className={`font-semibold ${category === cat_name_en ? 'text-green-700' : 'text-black'}`}>{cat_name_en}</h3>
                        <p className='text-sm'>Subcategory : {no_of_subcat}</p>
                    </span>
                </span>
                <span className='text-center text-sm text-[#7E7E7E]'>
                    <span className='font-semibold text-base text-[#393939]'>{no_of_dua}</span> <br />
                    Duas
                </span>

            </div>
            {
                cattegoruId === cat_id && <div className=' pl-5 ml-5 border-l-2 border-dotted border-l-lime-700'>
                    {
                        subcategoryData.map(item => <Link  href={'#'} key={item?._id} className='block my-3 subCategory'>
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
