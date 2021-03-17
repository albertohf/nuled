import Head from 'next/head'
import Header from '../pages/components/Header'
import Section from '../pages/components/Section'
import Footer from '../pages/components/Footer'
import React from 'react'


const home = () => {
  return (
    <div className="container m-w-full">
      <Head>
        <title>Nuled</title>
        <link rel="icon" href="" />
      </Head>
      <Header />
      <Section />
      <Footer />
    </div>
  )
}

export default home