import Link from 'next/link'
import Image from 'next/image'
import GetStartedBtn from './getStartedBtn'
import Logo from '../../public/moteghayer-logo.svg'
import { useState, useEffect } from 'react'

const NavBar = () => {
    const [navCssClass, setNavCssClass] = useState('py-8');

    const scrollFunction = () => {
        console.log(document.documentElement.scrollTop); 
        if (document.documentElement.scrollTop >= 10) {
            setNavCssClass('h-20 bg-opacity-70');
        }
        else setNavCssClass('h-32');
    }
    useEffect(() => {
        window.addEventListener('scroll', scrollFunction);
    },[]);

    return (
        <nav style={{transition: '.3s'}} className={`${navCssClass} f-center w-full bg-black-800 bg-opacity-70 backdrop-blur-xl z-20 fixed top-0`}>
            <div className='f-between w-4/5'>
                <div className='f-between'>
                    <Image
                        src={Logo}
                        alt='لوگو متغیر'
                        width={75}
                        height={0}
                    />

                    <div className='mr-2 mt-1 text-black-600'>
                        <h4 className='text-2xl font-bold -mb-2.5'>متغیر</h4>
                        <span className='opacity-70 text-black-500'>بنر ساز آنلاین</span>
                    </div>
                </div>

                <div>
                    <Link className='opacity-70' href='/login'>ورود</Link>
                    <Link className='mx-7 opacity-70' href='/contact-us'>ارتباط با ما</Link>
                    <GetStartedBtn />
                </div>
            </div>
        </nav>
    )
}

export default NavBar;