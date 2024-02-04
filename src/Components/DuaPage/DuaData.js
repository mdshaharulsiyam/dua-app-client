'use client'

import Image from "next/image";
import Link from "next/link";

const DuaData = ({ items }) => {
    if (!items) {
        return false
    }
    const { item, duas } = items?.data;
    return (
        <div id={`sub${item?.subcat_id}`} className="xl:w-[700px] lg:w-[600px]  pt-4">
            <h2 className=" p-4 my-4 rounded-xl text-base font-semibold bg-white"><span className="text-[#1FA45B]">Section:</span> {item?.subcat_name_en}</h2>
            {
                duas.map((item, index) => <div className="bg-white rounded-xl p-4 my-4" key={item?._id}>
                    <h3 className="bg-white flex justify-start items-center font-semibold text-base gap-5 text-[#1FA45B]">
                        <Image src='https://i.ibb.co/jJjBrMh/allah-1-Traced.png' height={50} width={50} alt='image' />
                        {index + 1} .{item?.dua_name_en}
                    </h3>
                    <p className="text-[#393939] py-3">{item?.top_en}</p>
                    <p className="text-[#393939] py-3">{item?.dua_arabic}</p>
                    {
                        item?.transliteration_en && <p className="text-[#393939] py-3 italic"><span className="font-semibold not-italic">Transliteration :</span> {item?.transliteration_en}</p>
                    }
                    {
                        item?.translation_en && <p className="text-[#393939] py-3 "><span className="font-semibold">Translation :</span> {item?.translation_en}</p>
                    }

                    <p className="font-semibold text-[#393939]">
                        <span className="text-[#1FA45B] block">Reference : </span>
                        {item?.refference_en}</p>
                    <div className="flex justify-between items-center pt-12 pb-4">
                        <audio src={item?.audio} controls></audio>
                        <span className="w-full flex justify-end items-center gap-6">
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
                    </div>
                </div>)
            }

        </div>
    )
}

export default DuaData
