import Head from 'next/head'
import Header from '../components/landingPage/header'
import Main from '../components/landingPage/main/main'
import Layout from '@/Layout/layout'

const Landing = () => {
  return (
    <>
      <Head>
        <title>متغیر | بنر ساز آنلاین</title>
        <meta name="description" content="Online Banner Maker" />
      </Head>

      <Layout>
        <Header />
        <Main />
      </Layout>
    </>
  )
}

export default Landing;