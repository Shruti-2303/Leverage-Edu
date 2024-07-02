import React from "react";
import styles from "./advcard.module.scss";
const Advcard = ({ item }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imgContainer}>
        <img src={item.img} alt="" />
      </div>

      <div className={styles.title}>{item.title}</div>
      <div className={styles.description}>{item.description}</div>
    </div>
  );
};

export default Advcard;
