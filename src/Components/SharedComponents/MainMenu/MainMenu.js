import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MainMenu = () => {
    return (
        <div className='h-screen overflow-auto  w-[100px]'>
            <div className='py-6 bg-white rounded-2xl gap-16 flex justify-center items-center flex-col '>
                <Link href={'#'}>
                    <Image src='https://i.ibb.co/YpFcCXG/unnamed-1.png' height={100} width={100} alt='image'/>
                </Link>
                <ul className=' flex justify-center items-center flex-col gap-7'>
                    <li className='bg-[#E8F0F5] p-4 rounded-full'>
                        <Link href={'/'}>
                            <Image src='https://i.ibb.co/Fmjjzh5/home-1.png' height={30} width={30} alt='image'/>
                        </Link>
                    </li>
                    <li className='bg-[#E8F0F5] p-4 rounded-full'>
                        <Link href={'/'}>
                            <Image src='https://i.ibb.co/cbNf2dd/54-menu-2.png' height={30} width={30} alt='image'/>
                        </Link>
                    </li>
                    <li className='bg-[#E8F0F5] p-4 rounded-full'>
                        <Link className='' href={'/'}>
                            <Image src='https://i.ibb.co/8cFZHSW/Vector-8.png' height={30} width={30} alt='image'/>
                        </Link>
                    </li>
                    <li className='bg-[#E8F0F5] p-4 rounded-full'>
                        <Link className='' href={'/'}>
                            <Image src='https://i.ibb.co/xD2SnQQ/3-keep-minus.png' height={30} width={30} alt='image'/>
                        </Link>
                    </li>
                    <li className='bg-[#E8F0F5] p-4 rounded-full'>
                        <Link className='' href={'/'}>
                            <Image src='https://i.ibb.co/5LvmgFk/Clip-path-group.png' height={30} width={30} alt='image'/>
                        </Link>
                    </li>
                    <li className='bg-[#E8F0F5] p-4 rounded-full'>
                        <Link className='' href={'/'}>
                            <Image src='https://i.ibb.co/2YsRZ92/dua-info-1.png' height={30} width={30} alt='image'/>
                        </Link>
                    </li>
                    <li className='bg-[#E8F0F5] p-4 rounded-full'>
                        <Link className='' href={'/'}>
                            <Image src='https://i.ibb.co/s94WBCv/books-1.png' height={30} width={30} alt='image'/>
                        </Link>
                    </li>

                </ul>
                <Link className='bg-[#1EA55B] rounded-lg p-4' href={'#'}>
                    <Image src='https://i.ibb.co/6vHDcyY/icon.png' height={30} width={30} alt='image'/>
                </Link>
            </div>
        </div>
    )
}

export default MainMenu
