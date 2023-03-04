import Image from 'next/image'
import { useState, useEffect } from 'react'

const ImgTxtContainer = ({ rtl = true, img, children, id }) => {
    return (
        <section id={id} className={`${rtl ? 'lg:flex-row' : 'lg:flex-row-reverse'} f-col-center lg:f-between w-4/6 max-w-1360`}>
            <div className='w-full lg:w-1/2 f-center'>
                <Image
                    src={img[0]}
                    alt={img[1]}
                    className='sm:w-full'
                />
            </div>

            <div className='lg:w-2/5 w-full'>
                {children}
            </div>
        </section>
    )
}

export default ImgTxtContainer;