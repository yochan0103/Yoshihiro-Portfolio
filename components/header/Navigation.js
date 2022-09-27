import Head from "next/head";
import { Link } from "react-scroll"
import styles from '../header/Navigation.module.css'

const Navigation = ({title='HP Netsu'}) => {
    return (
        <div className={styles.Wrapper}>
            <Head>
                <title>{ title }</title>
            </Head>
            <header className={styles.head}>
                <nav className={styles.Nav}>
                    <div className={styles.Navitems}>
                        <div className={styles.Navhome}>
                            <Link to='greeting' smooth={true} offset={-100} className='hover:cursor-pointer'>
                                <div className={styles.Itemslink}>
                                    Home
                                </div>
                            </Link>
                            <Link to='about' smooth={true} offset={-100} className='hover:cursor-pointer'>
                                <div className={styles.Itemslink}>
                                    About
                                </div>
                            </Link>
                            <Link to='timeline' smooth={true} offset={-100} className='hover:cursor-pointer'>
                                <div className={styles.Itemslink}>
                                    Biography
                                </div>
                            </Link>
                            <Link to='works' smooth={true} offset={-100} className='hover:cursor-pointer'>
                                <div className={styles.Itemslink}>
                                    Works
                                </div>
                            </Link>
                            <Link to='contacts' smooth={true} offset={-100} className='hover:cursor-pointer'>
                                <div className={styles.Itemslink}>
                                    Contact
                                </div>
                            </Link>
                        </div>
                    </div>
                </nav> 
        </header>
    </div>
    )
}

export default Navigation