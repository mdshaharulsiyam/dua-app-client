import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MainMenu = () => {
    return (
        <div className='xl:h-screen overflow-auto z-40 h-24 w-full absolute xl:relative left-0 bottom-0 xl:w-[100px]'>
            <div className='py-6 bg-white rounded-2xl gap-16 flex justify-center items-center xl:flex-col '>
                <Link className=' lg:block hidden' href={'#'}>
                    <Image src='https://i.ibb.co/YpFcCXG/unnamed-1.png' height={100} width={100} alt='image'/>
                </Link>
                <ul className=' flex justify-center items-center xl:flex-col sm:gap-7 gap-4 '>
                    <li className='bg-[#E8F0F5] lg:p-4 sm:p-2 p-1 rounded-full'>
                        <Link href={'/'}>
                            <Image src='https://i.ibb.co/Fmjjzh5/home-1.png' height={30} width={30} alt='image'/>
                        </Link>
                    </li>
                    <li className='bg-[#E8F0F5] lg:p-4 sm:p-2 p-1 rounded-full'>
                        <Link href={'/'}>
                            <Image src='https://i.ibb.co/cbNf2dd/54-menu-2.png' height={30} width={30} alt='image'/>
                        </Link>
                    </li>
                    <li className='bg-[#E8F0F5] lg:p-4 sm:p-2 p-1 rounded-full'>
                        <Link className='' href={'/'}>
                            <Image src='https://i.ibb.co/8cFZHSW/Vector-8.png' height={30} width={30} alt='image'/>
                        </Link>
                    </li>
                    <li className='bg-[#E8F0F5] lg:p-4 sm:p-2 p-1 rounded-full'>
                        <Link className='' href={'/'}>
                            <Image src='https://i.ibb.co/xD2SnQQ/3-keep-minus.png' height={30} width={30} alt='image'/>
                        </Link>
                    </li>
                    <li className='bg-[#E8F0F5] lg:p-4 sm:p-2 p-1 rounded-full'>
                        <Link className='' href={'/'}>
                            <Image src='https://i.ibb.co/5LvmgFk/Clip-path-group.png' height={30} width={30} alt='image'/>
                        </Link>
                    </li>
                    <li className='bg-[#E8F0F5] lg:p-4 sm:p-2 p-1 rounded-full'>
                        <Link className='' href={'/'}>
                            <Image src='https://i.ibb.co/2YsRZ92/dua-info-1.png' height={30} width={30} alt='image'/>
                        </Link>
                    </li>
                    <li className='bg-[#E8F0F5] lg:p-4 sm:p-2 p-1 rounded-full'>
                        <Link className='' href={'/'}>
                            <Image src='https://i.ibb.co/s94WBCv/books-1.png' height={30} width={30} alt='image'/>
                        </Link>
                    </li>

                </ul>
                <Link className='bg-[#1EA55B] rounded-lg p-4 lg:block hidden' href={'#'}>
                    <Image src='https://i.ibb.co/6vHDcyY/icon.png' height={30} width={30} alt='image'/>
                </Link>
            </div>
        </div>
    )
}

export default MainMenu
