import Link from 'next/link'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import '@animxyz/core'
import { XyzTransition } from '@animxyz/react'
import GetStartedBtn from '../getStartedBtn'

const DropDown = () => {
    const [dropDown, setDropDown] = useState(false);
    useEffect(() => {
        if(window.screen.width >= 769) 
            setDropDown(true)
    }, [])

    const menuItems = [
        {
            href: '/login',
            text: 'ورود'
        },
        {
            href: '/contact-us',
            text: 'ارتباط با ما'
        },
        {
            href: '/members',
            text: 'اعضای متغیر'
        },
        {
            href: '/contact-us',
            text: 'کاریابی'
        },
    ];

    return (
        <>
            <GetStartedBtn className='md:order-1' />

            <span
                className='md:hidden text-orange-900 mr-2 z-30 p-2 flex opacity-70'
                onClick={() => setDropDown(!dropDown)}
            >
                <FontAwesomeIcon icon={faBars} className='!text-xl' />
            </span>

            <XyzTransition
                xyz='fade up'
                className='h-80 md:h-auto gap-y-5 ml-7 md:pb-0 pb-8 f-col-end md:flex-row md:f-between md:relative z-0 absolute w-full md:bg-transparent bg-opacity-95 bg-black-750 top-0 right-0'
            >
                {dropDown && 
                    <div>
                        {
                            menuItems.map(({ href, text }, index) => (
                                <Link href={href} key={index}>{text}</Link>
                            ))
                        }
                    </div>
                }
            </XyzTransition>
        </>
    )
}

export default DropDown;