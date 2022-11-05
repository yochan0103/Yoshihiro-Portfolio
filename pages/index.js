import Layout from '../components/Layout'
import Profile from '../components/Profile'
import TimeLine from '../components/TimeLine'
import Achievement from '../components/Achievement'
import Contacts from '../components/Contact'
import Greeting from '../pages/Greeting'
import ToBlog from '../components/ToBlog'

export default function Home() {
  return (
    <Layout title='Yoshihiro Netsu'>
      <Greeting />
      <Profile />
      <TimeLine />
      <Achievement title={"サロンめめ"} src={"/Salon_scene.jpg"} alt={'サロンめめ'} sentence={'実姉のお店のHPを作成しました'} href={"https://memesalon.vercel.app/"}/>
      <ToBlog />
      <Contacts />
    </Layout>
  )
}
