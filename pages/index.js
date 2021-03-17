import Head from 'next/head'
import Header from '../pages/components/Header'
import Section from '../pages/components/Section'
import Footer from '../pages/components/Footer'
import React from 'react'


const home = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Nuled</title>
        <link rel="icon" href="" />
      </Head>
      <Header />
      <Section />
      <Footer />
    </React.Fragment>
  )
}

export default home