import styles from '../styles/Main.module.css'
import Layout from '../components/Layout'
import Profile from '../components/Profile'
import TimeLine from '../components/TimeLine'
import Achievement from '../components/Achievement'
import Contacts from '../components/Contact'
import Greeting from '../pages/Greeting'
import Navigation from '../components/header/Navigation'
import HamburgerMenu from '../components/header/HamburgerMenu'

export default function Home() {
  return (
    <Layout title='Yoshihiro Netsu'>
      <Greeting />
      <Profile />
      <TimeLine />
      <Achievement title={"サロンめめ"} src={"/Salon_scene.jpg"} alt={'サロンめめ'} sentence={'実姉のお店のHPを作成しました'} href={"https://memesalon.vercel.app/"}/>
      <Contacts />
    </Layout>
  )
}
