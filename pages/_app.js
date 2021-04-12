import Head from 'next/head'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Container from 'react-bootstrap/Container'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'

export default function app({ Component, pageProps }) {
  return (
    <div className="site">
      <Head>
        <title>Template</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/image/favicon-32x32.gif" />
      </Head>
      <Navigation />
      <main>
        <Container>
          <Component {...pageProps} />
        </Container>
      </main>
      <Footer />
    </div>
  )
}
