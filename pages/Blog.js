import Link from "next/link";
import { client } from "../libs/client";
import { Card } from "@mui/material";
import { CardActionArea } from '@mui/material'
import styles from '../styles/Blog.module.css';
import dayjs from 'dayjs';
import { motion } from "framer-motion";

export const getStaticProps = async () => {
    const blog = await client.get({ endpoint: "blogs" });
    return {
      props: {
        blogs: blog.contents,
      },
    };
};

export const ConvertTime = ({convertDate}) => {
    const ConvertedTime = dayjs(convertDate).format('YYYY.MM.DD')
    return ConvertedTime
}

const Blog = ({blogs}) => {
    return (
            <div className={styles.ContentsWrapper}>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }} 
                >
                    <div className={styles.ContentsTitle}>
                        Yoshihiro Netsu Blog
                    </div>
                        <ul className={styles.BlogWrapper}>
                            {blogs.slice(0,3).map((blog) => (
                                <li key={blog.id} className={styles.BlogContents}>
                                    <Card justify="center" elevation={5} sx={{ maxWidth:300, display:'flex' }}>
                                        <CardActionArea>
                                            <Link href={`/blog/${blog.id}`}>
                                                <img src={blog.eyecatch.url} alt="" className={styles.ImageWrapper} />
                                            </Link>
                                            <ConvertTime convertDate={blog.publishedAt} className={styles.PublishedTime} />
                                            <h1 className={styles.BlogTitle}>{blog.title}</h1>
                                        </CardActionArea>
                                    </Card>
                                </li>
                            ))}
                        </ul>
                </motion.div>
            </div>
    )
}

export default Blog