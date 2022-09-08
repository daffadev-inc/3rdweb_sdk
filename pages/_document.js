// pages/_document.js
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

const name = '[Your Name]'
export const siteTitle = 'Next.js Sample Website'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="id">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
