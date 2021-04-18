import Head from 'next/head'

export default function app({ Component, pageProps }) {
  return (
    <div className="site">
      <Head>
        <title>Template</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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
