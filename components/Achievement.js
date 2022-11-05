import styles from "../components/styles/Achieve.module.css"
import Image from "next/image";
import { NextSeo } from "next-seo";
import AnimationTrigger from "./AnimationTrigger";

const Achievement = (props) => {
    return (
        <>
            <NextSeo>
                title={"成果物、制作物紹介"}
                description={"Yoshihiro Netsu(根津 嘉大)の過去に制作したホームページを掲載。"}
            </NextSeo>
            <AnimationTrigger animation={styles.animation} rootMargin="0px" triggerOnce>
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
            </AnimationTrigger>
        </>
    )
}

export default Achievement