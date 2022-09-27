import styles from "../components/styles/Profile.module.css"
import Image from "next/image"
import { AiFillGithub } from "react-icons/ai"

const Profile = () => {
    return (
        <div className={styles.Wrapper} id='about'>
            <div className={styles.TitleWrapper}>
                <div className={styles.title}>About</div>
            </div>
            <div className={styles.ContentsWrapper}>
                <div className={styles.ImageWrapper}>
                    <Image src="/profileImg.JPG" alt="Profile img" width={700} height={600} objectFit="contain"></Image>
                </div>
                <div className={styles.Greeting}>
                    氏名: 根津　嘉大 (Yoshihiro Netsu)<br />
                    年齢 : 24歳<br />
                    出身 : 新潟県<br />
                    居住地 : 千葉県<br />
                    趣味 : サウナ/Youtube鑑賞/美術館へ行くこと<br />
                    <div className={styles.icons}>
                        <a href="https://github.com/yochan0103?tab=repositories">
                            <AiFillGithub  />
                        </a>
                    </div>
                </div>
            </div>
        </div>   
    )
}

export default Profile