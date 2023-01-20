import Head from 'next/head'
import { useState, useEffect, useRef } from 'react'
import dynamic from 'next/dynamic';
const Editor = dynamic(() => import('../components/app/editor'), {
  ssr: false,
});

const MainApp = () => {
  const loadingRef = useRef(false);
  // useEffect(() => {
  //   console.log(loadingRef);
  //   loadingRef.current = true;
  // }, [loadingRef]);

  return (
    <>
      <Head>
        <title>متغیر | بنر ساز آنلاین</title>
        <meta name="description" content="Online Banner Maker" />
      </Head>
      <Editor />
    </>
  )
}

export default MainApp;