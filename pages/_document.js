import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <title>Braxton Waxdeck, a student of Knowledge and Time</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta property="og:image" content="/images/portfolio-preview.png" />
          <meta property="og:url" content="https://www.braxwax.com" />
          <meta name="description" content="I live to Build | Software Engineer | Real Estate | Civil Engineer" />
          <meta name="keywords" content="Braxton Waxdeck, Portfolio, Software Developer, Real Estate, Civil Engineer" />
          <meta property="og:title" content="The Portfolio For Braxton Waxdeck" />
          <meta property="og:description" content="Gaining Knowledge in Software Engineering, Real Estate, Civil Engineering, and life" />
          <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600&display=swap" rel="stylesheet"></link>
          <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;