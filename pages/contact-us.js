import Head from 'next/head'
import Layout from '@/Layout/layout'
import Btn from '@/components/global/btn';

const Members = () => {
  return (
    <>
      <Head>
        <title>ارتباط با متغیر</title>
        <meta name="description" content="ارتباط با متغیر" />
      </Head>

      <Layout>
        <div className='f-col-center w-4/5'>
          <h2 className='text-2xl mt-28'>ارتباط با متغیر</h2>
          <form className='gap-3 flex flex-wrap my-7'>
            <input placeholder='نام' className='w-full md:w-1/3' />
            <input placeholder='ایمیل' className='w-full md:w-1/3' />
            <input placeholder='موضوع' className='w-full md:w-2/3' />
            <textarea 
              className='w-full'
              placeholder='متن پیام' 
              rows="5"
            ></textarea>

            <Btn>ارسال</Btn>
          </form>
        </div>
      </Layout>
    </>
  )
}

export default Members;