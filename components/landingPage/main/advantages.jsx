import Image from 'next/image'
import creditCardIco from '../../../assets/icons/credit-card.svg'
import timeIco from '../../../assets/icons/time.svg'
import crownIco from '../../../assets/icons/crown.svg'

const advantages = [
    [creditCardIco, 'کاهش 10 برابری هزینه ها'],
    [timeIco, 'صرفه جویی در زمان'],
    [crownIco, 'کیفیت؟ این پیش ماست']
];

const Advantages = () => {
    return (
        <section id='Advantages' className='f-center w-4/5 sm:w-2/4 mt-14 gap-x-10 sm:gap-x-14 max-w-750'>
            {
                advantages.map(([ico, desc], index) => {
                    return (
                        <div className='sm:w-1/5 w-1/3' key={index}>
                            <Image
                                className='w-2/3 mx-auto'
                                src={ico}
                                alt={desc}
                            />
                            <h4 className='mt-3 !text-base sm:text-lg mb-auto leading-6 font-medium text-center'>
                                {desc}
                            </h4>
                        </div>
                    );
                })
            }
        </section>
    )
}

export default Advantages;