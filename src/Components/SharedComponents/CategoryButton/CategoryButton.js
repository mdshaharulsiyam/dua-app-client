import Image from 'next/image';
import React from 'react'

const CategoryButton = ({ item, category }) => {
    console.log(item)
    const { cat_name_en, no_of_subcat, no_of_dua } = item;
    return (
        <div className={`cursor-pointer ${category === cat_name_en ? 'bg-[#E8F0F5]' : 'bg-transparent'} hover:bg-[#E8F0F5] transition-all rounded-md p-1 w-full flex justify-between items-center gap-1`}>
            <span className='flex justify-start items-center gap-2'>
                <Image src='https://i.ibb.co/0MrW2Gh/005-fever.png' height={60} width={60} />
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
    )
}

export default CategoryButton
