import Advantages from './advantages'
import Services from './services'
import layerImg from '@/assets/images/layer.svg'
import Image from 'next/image'
import GetStartedBtn from '../getStartedBtn'
import ImgTxtContainer from '../imgTxtContainer'
import targetImg from '../../../assets/images/target.svg'
import teamImg from '../../../assets/images/team.svg'
import handImg from '../../../assets/images/hand.svg'
import Link from 'next/link'

const Main = () => {
    return (
        <main className='w-full mt-20 f-col-center'>
            <Advantages />

            <ImgTxtContainer img={[targetImg, 'هدف']} id='about'>
                <h2>درباره متغیر</h2>
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>

                <h3>چرا متغیر؟</h3>
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>

                <h3>ماموریت متغیر</h3>
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
            </ImgTxtContainer>

            <Services />

            <ImgTxtContainer rtl={false} img={[teamImg, 'تیم متغیر']} id='team'>
                <h2>تیم متغیر</h2>
                <p className='mb-4'>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                </p>
                <Link href='team'>اطلاعات بیشتر</Link>
            </ImgTxtContainer>

            <ImgTxtContainer img={[handImg, 'گرافیست ها']} id='graphists'>
                <h2>نقش گرافیست ها</h2>
                <p className='mb-4'>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                </p>
                <Link href='team'>اطلاعات بیشتر</Link>
            </ImgTxtContainer>

            <div className='w-full f-center h-52 relative moteghayer-gradient overflow-hidden'>
                <Image
                    src={layerImg}
                    alt='layer'
                    className='absolute -bottom-20 -left-14 md:-left-32'
                    style={{ height: '130%', width: '40%' }}
                />
                <Image
                    src={layerImg}
                    alt='layer'
                    className='absolute -top-20 -right-14 md:-right-32 transform rotate-180'
                    style={{ height: '130%', width: '40%' }}
                />
                <div className='f-col-center'>
                    <h3 className='font-extrabold text-black-800 mb-4 z-10 text-2xl'>آماده شروع یک تغییر هستید؟</h3>
                    <GetStartedBtn invert />
                </div>
            </div>
        </main>
    )
}

export default Main;