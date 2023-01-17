import Image from 'next/image'
import { useState, useEffect } from 'react'
import creditCardIco from '../../../assets/icons/credit-card.svg'

const advantages = [
    {
        ico: creditCardIco,
        desc: 'کاهش 10 برابری هزینه ها'
    },
    {
        ico: creditCardIco,
        desc: 'صرفه جویی در زمان'
    },
    {
        ico: creditCardIco,
        desc: 'کیفیت؟ این پیش ماست'
    }
];

const Advantages = () => {
    return (
        <section id='Advantages' className='f-center w-4/5 sm:w-2/5 mt-14 max-w-750'>
            <div className='f-between gap-x-6'>
                {
                    advantages.map(({ ico, desc }, index) => {
                        return (
                            <div className='f-col-center sm:w-1/4 w-1/3' key={index}>
                                <Image
                                    className='w-full mx-auto'
                                    src={ico}
                                    alt={desc}
                                />
                                <h4 className='mt-3 text-sm sm:text-lg mb-auto leading-6 font-medium text-center'>{desc}</h4>
                            </div>
                        );
                    })
                }
            </div>
        </section>
    )
}

export default Advantages;