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
        if(window.screen.width >= 480) 
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
            href: '/contact-us',
            text: 'اعضای متغیر'
        },
        {
            href: '/contact-us',
            text: 'کاریابی'
        },
    ];

    return (
        <>
            <span
                className='sm:hidden text-orange-900 text-2xl mr-auto top z-30 w-12 p-3 flex opacity-70'
                onClick={() => setDropDown(!dropDown)}
            >
                <FontAwesomeIcon icon={faBars} size='xl' />
            </span>

            <XyzTransition
                xyz='fade up'
                className='h-96 sm:h-auto gap-y-5 sm:pb-0 pb-8 f-col-end sm:f-between sm:relative z-0 absolute w-full sm:bg-transparent bg-opacity-95 bg-black-700 top-0 left-0'
            >
                {dropDown && 
                    <div>
                        {
                            menuItems.map(({ href, text }, index) => (
                                <Link href={href} key={index}>{text}</Link>
                            ))
                        }
                        <GetStartedBtn />
                    </div>
                }
            </XyzTransition>
        </>
    )
}

export default DropDown;