import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            crossOrigin="true"
            rel="preconnect"
            href="https://fonts.googleapis.com"
          />
          <link
            crossOrigin="true"
            rel="preconnect"
            href="https://fonts.gstatic.com"
          />
          <link
            crossOrigin="true"
            href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
