import React from "react";
import styles from "./AdvCard.module.scss";
const AdvCard = ({ item }) => {
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

export default AdvCard;
