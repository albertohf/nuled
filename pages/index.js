import Head from 'next/head'
import Header from './components/Header'
import Footer from './components/Footer'
import Section from './components/Section'

const Home = () => {
  return (
    <div className="leading-normal tracking-normal text-white gradient">
      <Head>
        <title>Nuled - Marketing Visual</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Section />
      <Footer />
    </div>
  )
}

module.exports = Home
