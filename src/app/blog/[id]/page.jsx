import React from 'react'
import data from '../data';
import styles from './page.module.css'
import Image from 'next/image';

const BlogPost = async ({ params }) => {
  const datas = data.find((item) => item._id === params.id);
  
  
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{datas.title}</h1>
          <p className={styles.desc}>
            {datas.desc}
          </p>
          <div className={styles.author}>
            <Image
              src={datas.userPicture}
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
              
            />
            <span className={styles.username}>{datas.username}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={datas.img}
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
         {datas.content}
        </p>
      </div>
    </div>
  );
};

export default BlogPost;