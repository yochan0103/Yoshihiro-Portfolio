import Image from "next/image";
import styles from './styles/Hero.module.css';

const Hero = () => {
    return (
        <div className={styles.Wrapper}>
            <Image src='/profile.JPG' alt ='profile' width={500} height={500} objectFit="contain" className={styles.img}></Image>
        </div>
    )
}

export default Hero