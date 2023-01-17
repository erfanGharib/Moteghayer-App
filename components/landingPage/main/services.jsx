import Image from 'next/image'
import { useState, useEffect } from 'react'
import service1 from '../../../assets/images/servicesImg/service-1.svg'

const services = [
    {
        img: service1,
        title: 'مشتریان شما را مشیناسیم',
        desc: 'انتخاب طرح هوشمند مطابق سلیقه مشتریان شما'
    },
    {
        img: service1,
        title: 'برترین فونت های فارسی',
        desc: 'فونت حرفه ای برای طرح حرفه ای شما'
    },
    {
        img: service1,
        title: 'نگران رنگ ها نباش',
        desc: 'دستیار هوشمند پیشنهاد رنگ برای طرح شما'
    },
    {
        img: service1,
        title: 'در یاد ها بمانید',
        desc: 'دستیار هوشمند برای رعایت قوانین تجربه کاربری'
    },
    {
        img: service1,
        title: 'کار تیمی فراموش نشه',
        desc: 'بهینه شده برای فعالیت های تیمی و مدیریت آسان تیم'
    },
    {
        img: service1,
        title: 'چاپ کنید تا ماندگار شوید',
        desc: 'طرح های چاپی خودتان را خلق و آماده ارسال به چاپخانه کنید'
    },
];

const Services = () => {
    return (
        <section id='Services' className='f-col-center justify-center w-5/6 md:w-4/5 lg:max-h-800 max-w-750 md:h-95vh'>
            <h2 className='mb-7'>با متغیر خلق کنید تا دیده شوید</h2>
            <div className='flex content-center justify-between items-start flex-wrap'>
                {
                    services.map(({ img, title, desc }, index) => {
                        return (
                            <div className='f-col-center mt-2 md:mt-5 md:w-1/3 w-2.5/5' style={{ minWidth: '100px' }} key={index}>
                                <Image
                                    className='mx-auto w-full md:w-5/6'
                                    src={img}
                                    alt={title}
                                />
                                <h4 className='mt-2 -mb-1 leading-6 text-md md:text-xl font-medium text-center'>{title}</h4>
                                <p className='leading-5 text-sm sm:text-lg w-3/4 md:w-2/3 text-center'>{desc}</p>
                            </div>
                        );
                    })
                }
            </div>
        </section>
    )
}

export default Services;