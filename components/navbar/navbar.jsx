import Image from 'next/image'
import Logo from '../../public/moteghayer-logo.svg'
import { useState, useEffect } from 'react'
import DropDown from './dropDown'
import Link from 'next/link'

const NavBar = () => {
    const [navCssClass, setNavCssClass] = useState('h-28 bg-opacity-0');

    const scrollFunction = () => {
        if (document.documentElement.scrollTop >= 10) {
            setNavCssClass('h-20 bg-blur');
        }
        else setNavCssClass('h-28 bg-opacity-0');
    }
    useEffect(() => {
        window.addEventListener('scroll', scrollFunction);
    }, []);

    return (
        <nav className={`${navCssClass} transition-all duration-300 f-center w-full bg-black-750 z-20 fixed top-0`}>
            <div className='f-between w-4/5 max-w-1360'>
                <Link href='/' className='!opacity-100 f-between z-30'>
                    <Image
                        src={Logo}
                        alt='لوگو متغیر'
                        className='sm:w-20 w-16'
                    />

                    <div className='mr-2 mt-1 text-black-600 w-24 sm:block hidden'>
                        <h4 className='text-2xl font-bold -mb-2.5'>متغیر</h4>
                        <span className='opacity-70 text-black-500'>بنر ساز آنلاین</span>
                    </div>
                </Link>

                <div className='sm:w-1/2 flex justify-end items-center sm:h-auto h-96'>
                    <DropDown />
                </div>
            </div>
        </nav>
    )
}

export default NavBar;