import React from "react";
import styles from "./page.module.css";
import Button from "@/components/button/button";
import Image from "next/image";
const Contact = () => {
  return (
    <div className={styles.container}>
      <h1>Let's Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            fill={true}
            alt=""
            className={styles.image}
          />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="text" placeholder="email" className={styles.input} />
          <textarea
            className={styles.textArea}
            placeholder="Message"
            cols="30"
            rows="10"
          ></textarea>
        <Button url="#" text="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
