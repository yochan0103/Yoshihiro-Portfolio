import styles from "../components/styles/Achieve.module.css"
import Image from "next/image";

const Achievement = (props) => {
    return (
        <div className={styles.Wrapper} id='works'>
            <div className={styles.TitleWrapper}>
                <div className={styles.title}>Works</div>
            </div>
            <div className={styles.ContentsWrapper}>
                <div className={styles.ContentsTitle}>{props.title}</div>
                <div className={styles.ImgWrapper}>
                    <a href={props.href}>
                        <Image src={props.src} alt={props.alt} width={400} height={400} objectFit="contain"></Image>
                    </a>
                </div>
                <div className={styles.sentence}>{ props.sentence }</div>
            </div>
        </div>
    )
}

export default Achievement