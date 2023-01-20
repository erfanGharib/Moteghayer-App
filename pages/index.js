import Head from 'next/head'
import { Inter } from '@next/font/google'
import Header from '../components/landingPage/header/header'
import Main from '../components/landingPage/main/main'

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
      <footer></footer>
    </>
  )
}

export default Landing;