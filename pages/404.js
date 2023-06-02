import Head from 'next/head'
import Layout from '@/Layout/layout'
import Link from 'next/link';

const notFound = () => {
    return (
        <>
            <Head>
                <title>صفحه مورد نظر یافت نشد</title>
                <meta name="description" content="Online Banner Maker" />
            </Head>

            <Layout>
                <div>
                    <h2>404</h2>
                    <p>صفحه مورد نظر یافت نشد <Link>بازگشت به صفحه اصلی</Link></p>
                </div>
            </Layout>
        </>
    )
}

export default notFound;