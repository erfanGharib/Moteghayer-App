import Link from 'next/link'
import Image from 'next/image'
import GetStartedBtn from '../getStartedBtn'

import laptopImg from '../../../assets/images/laptop.svg'
import downArrowIco from '../../../assets/icons/down-arrow.svg'
import comeDownImg from '../../../assets/images/come-down.png'
import NavBar from './navbar'

const Header = () => {
    return (
        <header className='w-full h-full relative f-col-center bg-black-780'>
            <NavBar />
            <div className='lg:f-between lg:flex-row f-col-r-center max-w-1360 z-10 w-4/5 pt-14 h-79vh md:h-87vh'>
                <div className='lg:w-1/3 sm:w-3/5 w-full lg:mt-0 mt-5'>
                    <h2 className='leading-9 sm:leading-tight'>
                        از تغییر نترسید زیرا تغییر قانون زندگی و موفقیت است
                    </h2>
                    <p className='mb-5 mt-1 sm:mt-2 leading-6 opacity-50'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                    
                    <div>
                        <GetStartedBtn />
                        <Link className='mr-7' href='/moteghayer-team'>با متغیر آشنا شوید</Link>
                    </div>
                </div>

                <div className='w-full sm:w-3/4 flex justify-end lg:-ml-5'>
                    <Image
                        className='mt-5 h-full'
                        src={laptopImg}
                        alt='لپ تاپ'
                        loading='eager'
                    />
                </div>
            </div>

            <button
                style={{ background: `url(${comeDownImg.src}) no-repeat center`, backgroundSize: '290% 130%' }}
                className='w-full h-16 block absolute right-0 -bottom-8 z-0'
            >
                <Image
                    className='animate-bounce mx-auto mt-16'
                    src={downArrowIco}
                    alt='down arrow'
                    width={30}
                    height={0}
                />
            </button>
        </header>
    )
}

export default Header;