import Link from "next/link";
import { Grid, Button } from '@mui/material'
import styles from './styles/ToBlog.module.css'
import LaunchIcon from '@mui/icons-material/Launch';
import AnimationTrigger from "./AnimationTrigger";

const ToBlog = () => {
    return(
        <AnimationTrigger animation={styles.animation} rootMargin="0px" triggerOnce>
            <div id='blog' className={styles.BlogWrapper}>
                <div className={styles.TitleWrapper}>
                    <h1 className={styles.title}>Blog</h1>
                </div>
                <div className={styles.ContentsWrapper}>
                        <Grid container justifyContent='center' mt='20px'>
                            <Button
                            type="button"
                            variant='outlined'
                            color='success'
                            size="large"
                            style={{width:'20vw', fontSize:'1.5rem'}}
                            endIcon={<LaunchIcon />}
                            className={styles.Button}
                            sx={{boxShadow: 5}}
                            href='/Blog'
                            >
                            ブログはこちら！
                            </Button> 
                        </Grid> 
                </div>
                <div className={styles.ContentsResponsiveWrapper}>
                    <Link href='/Blog'>
                        <Grid container justifyContent='center' mt='20px'>
                            <Button
                            type="button"
                            variant='outlined'
                            color='success'
                            style={{width:'40vw', fontSize:'20px'}}
                            endIcon={<LaunchIcon />}
                            className={styles.Button}
                            sx={{boxShadow: 5}}
                            >
                            ブログはこちら！
                            </Button> 
                        </Grid> 
                    </Link>
                </div>
            </div>
        </AnimationTrigger>
    )
}

export default ToBlog