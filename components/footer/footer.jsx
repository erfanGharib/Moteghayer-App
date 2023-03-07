import FSection from "./fSection";
import Link from 'next/link';
import Image from "next/image";

import enamadLogo from '@/assets/images/enamad.png';
import zarinpalLogo from '@/assets/images/zarinpal.webp';
import mailIco from '@/assets/icons/social/mail.svg';
import phoneIco from '@/assets/icons/social/phone.svg';
import telegramIco from '@/assets/icons/social/telegram.svg';
import instagramIco from '@/assets/icons/social/instagram.svg';
const contactWay = [
    ['#', mailIco.src, 'info@moteghayer.com'],
    ['#', instagramIco.src, 'moteghayer.com'],
    ['#', telegramIco.src, 'moteghayer.com'],
    ['#', phoneIco.src, '98-9398203406+'],
];

const Footer = () => {
    return (
        <footer className='w-full max-w-1360 f-col-center border-t border-black-750 border-opacity-50'>
            <div className='md:w-4/5 w-4/6 py-10'>
                <div className='w-4/5 f-col-start md:flex-row md:f-start-start gap-y-7 md:gap-y-0 md:gap-x-20'>
                    <FSection title='متغیر'>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                    </FSection>

                    <FSection title='همراه ما باشید'>
                        {contactWay.map(([link, ico, title], i) => (
                            <Link href={link} key={i} className='f-between'>
                                <i 
                                    className='w-6 h-5' 
                                    style={{
                                        background: `url(${ico}) center no-repeat`, 
                                        backgroundSize: 'contain'
                                    }}
                                ></i>
                                <span className='mr-2 mt-1'>{title}</span>
                            </Link>
                        ))}
                    </FSection>

                    <FSection title='مجوزات'>
                        <div className='f-between gap-x-2 opacity-80'>
                            <Image src={zarinpalLogo} alt='zarinpal' width='70' />
                            <Image src={enamadLogo} alt='enamad' width='95' />
                        </div>
                    </FSection>
                </div>
            </div>

            <div id='copyright' className='w-full border-t border-black-750 border-opacity-50'>
                <div className='w-4/5 f-between py-3 mx-auto flex-wrap opacity-30'>
                    <span>کلیه حقوق این سایت متعلق به تیم متغیر میباشد</span>
                    <span>توسعه داده شده با ❤</span>
                </div>
            </div>
        </footer>
    );
}
export default Footer;