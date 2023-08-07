import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";


export const metadata = {
  title: "Contact-Fahrikos",
  description: "This is the description",
};


const Contact = () => {
  return (
    <div className={styles.container}><h1 className={styles.title}>Let's Keep in Touch</h1>
    <div className={styles.content}>
      <div className={styles.imgContainer}>
        <Image src='/contact.png' fill={true}className={styles.logo} alt="contact"></Image>
      </div>
      <form className={styles.form}>
        <input type="text" placeholder="name" className={styles.input}  />
        <input type="text" placeholder="email" className={styles.input} />
        <textarea className={styles.textArea}placeholder='message'  cols="50" rows="14"></textarea>

      <Link href='#'>
        <button type="button" className={styles.button}>Send</button>
      </Link>
      </form>


    </div>
    </div>
  );
};

export default Contact;
