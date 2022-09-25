import Layout from '../components/Layout'
import Achievement from "../components/Achievement"
import styles from "../styles/AhievementPage.module.css"

const AchievementPage = () => {
    return (
        <Layout title={Achievement}>
            <div className={styles.title}>Ahievememt</div>
            <div className={styles.Wrapper}>
                <Achievement title={"サロンめめ"} src={"/Salon_scene.jpg"} alt={'サロンめめ'} sentence={'実姉のお店のHPを作成しました'} href={"https://memesalon.vercel.app/"}/>
                <Achievement title={"まだないです。。。"} src={"/noimage.jpg"} alt={''} sentence={'Comming soon...'} />
            </div>
        </Layout>
    )
}

export default AchievementPage