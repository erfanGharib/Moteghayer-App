import Head from 'next/head'
import Layout from '@/Layout/layout'
import Link from 'next/link';

const NotFound = () => {
    return (
        <>
            <Head>
                <title>صفحه مورد نظر یافت نشد</title>
                <meta name="description" content="Online Banner Maker" />
            </Head>

            <Layout>
                <div className='h-full w-full flex justify-center items-center flex-col'>
                    <h2 className='!text-[5rem]'>404</h2>
                    <p>صفحه مورد نظر یافت نشد <Link href='/'>صفحه اصلی</Link></p>
                </div>
            </Layout>
        </>
    )
}

export default NotFound;