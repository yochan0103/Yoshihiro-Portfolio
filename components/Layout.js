import Head from "next/head"
// import Link from "next/link"
import Image from "next/image"
import styles from "../components/styles/Layout.module.css"
import { Link } from "react-scroll"

export default function Layout({children, title = "HP by Netsu"}){
    return (
        <div className={styles.wraper}>
            <Head>
                <title>{title}</title>
            </Head>
            <header>
                <nav className={styles.Nav}>
                    <div className={styles.Navitems}>
                        <div className={styles.Navhome}>
                            <Link to='greeting' smooth={true} offset={-100} className='hover:cursor-pointer'>
                                <a className={styles.Itemslink}>
                                    Home
                                </a>
                            </Link>
                            <Link to='about' smooth={true} offset={-100} className='hover:cursor-pointer'>
                                <a className={styles.Itemslink}>
                                    About
                                </a>
                            </Link>
                            <Link to='timeline' smooth={true} offset={-100} className='hover:cursor-pointer'>
                                <a className={styles.Itemslink}>
                                    Biography
                                </a>
                            </Link>
                            <Link to='works' smooth={true} offset={-100} className='hover:cursor-pointer'>
                                <a className={styles.Itemslink}>
                                    Works
                                </a>
                            </Link>
                            <Link to='contacts' smooth={true} offset={-100} className='hover:cursor-pointer'>
                                <a className={styles.Itemslink}>
                                    Contact
                                </a>
                            </Link>
                        </div>
                    </div>
                </nav> 
            </header>
            <main className={styles.main}>
                    {children}
            </main>
            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <span className={styles.logo}>
                        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                    </span>
                </a>
            </footer> 
        </div>
    )
}