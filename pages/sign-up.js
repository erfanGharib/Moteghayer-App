import Head from 'next/head'
import Layout from '@/Layout/layout'
import Btn from '@/components/global/btn';
import IcoGoogle from '../assets/icons/google.svg'
import Image from 'next/image';

const SignUp = () => {
  return (
    <>
      <Head>
        <title>ثبت نام</title>
      </Head>

      <Layout>
        <div className='f-col-center w-4/5'>
          <h2 className='text-2xl mt-28'>ثبت نام</h2>
          <form className='gap-3 flex flex-col my-7'>
            <div className='gap-3 flex flex-wrap mb-2'>
              <input placeholder='نام' className='w-full md:w-1/3 grow' />
              <input placeholder='نام خانوادگی' className='w-full md:w-1/3 grow' />
              <input placeholder='ایمیل' className='w-full md:w-1/3 grow' />
              <input placeholder='پسوورد' type='password' className='w-full md:w-1/3 grow' />
            </div>

            <Btn>ثبت نام</Btn>
            <Btn className='pt-2 bg-white hover:bg-white bg-opacity-10 hover:bg-opacity-20'>
              <Image src={IcoGoogle} alt='google icon' width={20} className='ml-3' />
              ثبت نام با گوگل
            </Btn>
          </form>
        </div>
      </Layout>
    </>
  )
}

export default SignUp;