import Head from "next/head"
import Image from "next/image"
import styles from "../components/styles/Layout.module.css"
import { Link } from "react-scroll"
import { useState } from "react"
import { slide as Menu } from 'react-burger-menu'
import { CgMenu } from 'react-icons/cg'
import { CgCloseR } from 'react-icons/cg'

export default function Layout({children, title = "HP by Netsu"}){
    const [ openMenu, setOpenMenu ] = useState(false);
     return (
        <div className={styles.wraper}>
            <Head>
                <title>{title}</title>
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
                <nav className={styles.HamburgerNav}>
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
                    {openMenu && <div className={styles.HamburgerItems}>
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
                    </div>}
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