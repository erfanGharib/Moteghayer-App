import Head from 'next/head'
import { Inter } from '@next/font/google'
import Header from '../components/landingPage/header/header'
import Main from '../components/landingPage/main/main'
import Footer from '../components/landingPage/footer/footer'

const inter = Inter({ subsets: ['latin'] })

const Landing = () => {
  return (
    <>
      <Head>
        <title>متغیر | بنر ساز آنلاین</title>
        <meta name="description" content="Online Banner Maker" />
      </Head>

      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default Landing;