import Head from "next/head"
import styles from "../components/styles/Layout.module.css"
import { Link } from "react-scroll"
import { useState } from "react"
import { CgMenu } from 'react-icons/cg'
import { CgCloseR } from 'react-icons/cg'

export default function Layout({children, title = "HP by Netsu"}){
    const [ openMenu, setOpenMenu ] = useState(false);
    const menuFunction = () => {
        setOpenMenu(!openMenu);
    }
     return (
        <div className={styles.wraper}>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta
                    name="portfolio"
                    content="Yoshihiro Netsu のポートフォリオサイトです。"
                ></meta>
                <meta name="google-site-verification" content="5w-U8hzioKaKm2qcZJJ458qdu88KuWYHsua7itPBAaQ" />
            </Head>
            <header className={styles.head}>
                <nav className={styles.Nav}>
                    <div className={styles.Navitems}>
                        <Link to='greeting' smooth={true} offset={-100} className='hover:cursor-pointer'>
                            <div className={styles.logo}>Yoshihiro Netsu</div>
                        </Link>
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
                <nav className={styles.HamburgerStyle}>
                    <div className={styles.HamburgerLocation}>
                        <div className={styles.LogoWrapper}>
                            <Link to='greeting' smooth={true} offset={-50} className='hover:cursor-pointer'>
                                <div className={styles.logo}>Yoshihiro Netsu</div>
                            </Link>
                        </div>
                        <div className={styles.HamburgerWrapper}>
                            {openMenu ? <CgCloseR className={styles.HamburgerIcon} 
                                        size='40px' 
                                        color='black'
                                        onClick={() => setOpenMenu(!openMenu)}
                                        /> : 
                                        <CgMenu className={styles.HamburgerIcon} 
                                        size='40px' 
                                        color='black'
                                        onClick={() => setOpenMenu(!openMenu)}
                                        />
                            }
                        </div>
                    </div>
                    <div className={styles.HamburgerNav}>
                        {openMenu && <div className={styles.HamburgerItems}>
                            <Link to='greeting' smooth={true} offset={-50} className='hover:cursor-pointer'>
                                <a className={styles.Itemslink} onClick={menuFunction}>
                                    Home
                                </a>
                            </Link>
                            <Link to='about' smooth={true} offset={-50} className='hover:cursor-pointer'>
                                <a className={styles.Itemslink} onClick={menuFunction}>
                                    About
                                </a>
                            </Link>
                            <Link to='timeline' smooth={true} offset={-50} className='hover:cursor-pointer'>
                                <a className={styles.Itemslink} onClick={menuFunction}>
                                    Biography
                                </a>
                            </Link>
                            <Link to='works' smooth={true} offset={-50} className='hover:cursor-pointer'>
                                <a className={styles.Itemslink} onClick={menuFunction}>
                                    Works
                                </a>
                            </Link>
                            <Link to='contacts' smooth={true} offset={-50} className='hover:cursor-pointer'>
                                <a className={styles.Itemslink} onClick={menuFunction}>
                                    Contact
                                </a>
                            </Link>
                        </div>}
                    </div>
                </nav>
            </header>
            <main className={styles.main}>
                    {children}
            </main>
            <footer className={styles.footer}>
                <div className={styles.footerItems}>
                    <p className={styles.fotterContents}>Copyright © 2022 Yoshihiro Netsu</p>
                </div>
            </footer> 
        </div>
    )
}