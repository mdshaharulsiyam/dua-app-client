'use client'

import Image from "next/image";
import Link from "next/link";

const DuaData = ({ items }) => {
    const { item, duas } = items?.data;
    // const {subcat_name_en}=item
    console.log(duas)
    return (
        <div className="w-[700px] pt-4">
            <h2 id="subcat_id" className=" p-4 my-4 rounded-xl text-base font-semibold bg-white"><span className="text-[#1FA45B]">Section:</span> {item?.subcat_name_en}</h2>
            {
                duas.map((item, index) => <div className="bg-white rounded-xl p-4 my-4" key={item?._id}>
                    <h3 className="bg-white flex justify-start items-center font-semibold text-base gap-5 text-[#1FA45B]">
                        <Image src='https://i.ibb.co/jJjBrMh/allah-1-Traced.png' height={50} width={50} alt='image' />
                        {index + 1} .{item?.dua_name_en}
                    </h3>
                    <p className="text-[#393939] py-7">{item?.top_en}</p>
                    <p className="font-semibold text-[#393939]">
                        <span className="text-[#1FA45B] block">Reference : </span>
                        {item?.refference_en}</p>
                    <span className="w-full flex justify-end items-center pt-8 pb-4 gap-6">
                        <Link href={'#'}>
                            <Image src='https://i.ibb.co/jfbwQdM/Vector-10.png' height={20} width={20} alt='image' />
                        </Link>
                        <Link href={'#'}>
                        <Image src='https://i.ibb.co/2qfXMWq/Vector-11.png' height={20} width={20} alt='image' />
                        </Link>
                        <Link href={'#'}>
                        <Image src='https://i.ibb.co/RYkPX9k/Frame.png' height={20} width={20} alt='image' />
                        </Link>
                        <Link href={'#'}>
                        <Image src='https://i.ibb.co/C77y9Vq/share-1.png' height={20} width={20} alt='image' />
                        </Link>
                        <Link href={'#'}>
                        <Image src='https://i.ibb.co/WF2Yk03/report-1.png' height={20} width={20} alt='image' />
                        </Link>

                    </span>
                </div>)
            }

        </div>
    )
}

export default DuaData
