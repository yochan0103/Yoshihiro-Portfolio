import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import { DefaultSeo } from 'next-seo';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        defaultTitle='Yoshihiro Netsuのポートフォリオ'
        canonical='https://yoshihiro-netsu-introduce.vercel.app/'
        description='Yoshihiro Netsuのポートフォリオサイトです。フロントエンドエンジニアとしてweb site制作を行います。
                      react(Next.js)でのコーディングが得意です。'
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
