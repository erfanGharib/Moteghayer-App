import Image from 'next/image'
import { useState, useEffect } from 'react'
import targetImg from '../../../assets/images/target.svg'

const About = () => {
    return (
        <section id='About' className='f-col-center lg:f-between my-14 sm:my-16 w-4/5 max-w-1360'>
            <div className='w-full lg:w-2/3 f-center'>
                <Image
                    src={targetImg}
                    alt='هدف'
                    className='sm:w-5/6 w-full'
                />
            </div>

            <div className='lg:w-1/3 w-full'>
                <h2>درباره متغیر</h2>
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>

                <h3>چرا متغیر؟</h3>
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>

                <h3>ماموریت متغیر</h3>
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
            </div>
        </section>
    )
}

export default About;