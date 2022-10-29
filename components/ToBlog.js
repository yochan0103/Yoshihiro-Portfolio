import Link from "next/link";
import { Grid, Button } from '@mui/material'
import styles from './styles/ToBlog.module.css'
import LaunchIcon from '@mui/icons-material/Launch';

const ToBlog = () => {
    return(
        <div id='blog' className={styles.BlogWrapper}>
            <div className={styles.TitleWrapper}>
                <h1 className={styles.title}>Blog</h1>
            </div>
            <div className={styles.ContentsWrapper}>
                <Link href='/Blog' scroll={false}>
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
                        >
                        ブログはこちら！
                        </Button> 
                    </Grid> 
                </Link>
            </div>
            <div className={styles.ContentsResponsiveWrapper}>
                <Link href='/Blog' scroll={false}>
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
    )
}

export default ToBlog