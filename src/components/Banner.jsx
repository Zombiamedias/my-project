import React, { memo, useState, useEffect } from 'react'
import Formulary from './Formulary'
import { IoIosArrowForward } from "react-icons/io";
const Banner = () => {
    const [open, setOpen] = useState(false);
    return (
        <main className='flex top-0 bottom-0 w-full h-[500px]  overflow-hidden flex-col md:flex-row p-8 items-center justify-center pt-20'>
            <ul className='flex row-auto  w-full items-center justify-center gap-40'>
                <li>
                    <button className='absolute flex top-[7vh] left-0 self-start pl-4 bg-blue-500 text-white pr-2  hover:translate-y-2 ease-in-out duration-300  justify-center text-left text-[2rem] text-extrabold rounded-md' 
                    onClick={() => setOpen(!open)}>
                        <IoIosArrowForward className='rotate-90'/>
                    </button>
                    {open && <Formulary />}
                </li>
                <li className='relative w-1/2 h-1/2 font-bold text-4xl text-blue-500 text-right'>
                    <h2 className='font-serif text-[6vh]'>En tu tienda sabemos cuidarte</h2>
                </li>
            </ul>

        </main>
    )
}

export default Banner