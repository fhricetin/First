import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Category = ({params}) => {
  return (
    <div className={styles.container}>
        <h1 className={styles.catTitle}>{params.category}</h1>
        <div className={styles.item}>
            <div className={styles.content}>
                <h1 className={styles.title}>Test</h1>
                <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic laborum repellat officia facilis, velit optio libero quidem soluta vero tenetur!</p>
                <Link href='#'>
                    <button className={styles.button}>See More</button>
                </Link>
            </div>
            <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              fill={true}
              src='https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg'
              alt=""
            />
            </div>
        </div>
        <div className={styles.item}>
            <div className={styles.content}>
                <h1 className={styles.title}>Test</h1>
                <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic laborum repellat officia facilis, velit optio libero quidem soluta vero tenetur!</p>
                <Link href='#'>
                    <button className={styles.button}>See More</button>
                </Link>
            </div>
            <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              fill={true}
              src='https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg'
              alt=""
            />
            </div>
        </div>
    </div>
  )
}

export default Category