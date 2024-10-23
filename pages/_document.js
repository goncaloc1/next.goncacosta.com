import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="description" content="Gonçalo Costa : gallery" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Dosis:wght@200..800&display=swap"
          rel="stylesheet"
        />
        <meta
          name="google-site-verification"
          content="fN_MpKv7865Tw0sNWRxzcL1U8oAG_fnFnZW1M2W0Zqs"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}