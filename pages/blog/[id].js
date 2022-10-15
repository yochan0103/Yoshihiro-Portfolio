import { client } from '../../libs/client';
import dayjs from 'dayjs';
import styles from './[id].module.css'
// import Image from 'next/image';

export const ConvertTime = ({convertDate}) => {
  const ConvertedTime = dayjs(convertDate).format('YYYY.MM.DD')
  return ConvertedTime
}

const BlogId = ({ blog }) => {
  return (
    <main>
      <h1 className={styles.Title} >{blog.title}</h1>
      <div className={styles.PublishedTime}>
        <ConvertTime convertDate={blog.publishedAt} />
      </div>
      <div className={styles.Contents}
        dangerouslySetInnerHTML={{
          __html: `${blog.content}`,
        }}
      />
    </main>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blogs" });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blogs", contentId: id });
  // console.log(data)

  return {
    props: {
      blog: data,
    },
  };
};

export default BlogId