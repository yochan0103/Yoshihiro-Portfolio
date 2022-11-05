import styles from '../styles/Greeting.module.css'
import Image from 'next/image'
import { NextSeo } from 'next-seo'
import AnimationTrigger from '../components/AnimationTrigger'

const Greeting = () => {
    return (
        <>
            <NextSeo>
                title={"Yoshihiro Netsu(根津 嘉大)の自己紹介"}
                description={"Yoshihiro Netsu(根津 嘉大)の初めましてのご挨拶。reactを中心にwebサイトの構築を行なっています。"}
            </NextSeo>
            <AnimationTrigger animation={styles.animation} rootMargin="0px" triggerOnce>
                <div className={styles.GreetingWrapper} id='greeting'>
                        <div className={styles.ContentsWrapper}>
                            <h1 className={styles.title}>ご挨拶</h1>
                            <div className={styles.Contents}>
                                閲覧いただきありがとうございます。
                                <br />
                                私は、現在一般企業に勤めながらフロントエンジニアの勉強をしています。
                                <br />
                                まだまだ駆け出したばかりですが、自身のスキルアップかつ本業へのコミットを目指し日々勉学を続けています。
                            </div>
                        </div>
                        <div className={styles.ImageWrapper}>
                            <Image src='/aboutme.JPG' alt='myimage' width={800} height={600} objectFit='contain' />
                        </div>
                </div>
            </AnimationTrigger>
        </>
    )
}

export default Greeting