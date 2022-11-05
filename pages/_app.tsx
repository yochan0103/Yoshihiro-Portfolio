import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import { DefaultSeo } from 'next-seo';
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        defaultTitle='Yoshihiro Netsu(根津 嘉大)のポートフォリオ'
        canonical='https://yoshihiro-netsu-introduce.vercel.app/'
        description='Yoshihiro Netsu(根津 嘉大)のポートフォリオサイトです。フロントエンドエンジニアとしてweb site制作を行います。
                      react(Next.js)でのコーディングが得意です。'
      />
      {/* <AnimatePresence exitBeforeEnter onExitComplete={() => window.scrollTo(0, 0)}>
        <Component key={router.asPath} {...pageProps} />
      </AnimatePresence> */}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
