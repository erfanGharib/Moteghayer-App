import Head from 'next/head'
import { useState, useEffect, useRef } from 'react'
import dynamic from 'next/dynamic';
import Loading from '@/components/app/loading/loading';

const Editor = dynamic(() => import('../components/app/editor.js'), {
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
      <Loading />
      <Editor />
    </>
  )
}

export default MainApp;