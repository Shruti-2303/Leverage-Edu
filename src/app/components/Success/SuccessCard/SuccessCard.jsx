import React from "react";
import styles from "./successCard.module.scss";
const successCard = ({ item }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.personInfo}>
        <div className={styles.imgContainer}>
          <img src={item.img} alt="photo" />
        </div>

        <div className={styles.infoContainer}>
          <div className={styles.name}>{item.name}</div>
          <div className={styles.fromTo}>
            {item.from}{" "}
            <span>
              <img
                src="https://res.cloudinary.com/ddtemnyax/image/upload/v1720447464/LeveragePics/icons8-arrow-24_1_cibqpl.png"
                alt="arrow"
              />
            </span>{" "}
            {item.to}
          </div>
        </div>
      </div>
      <div className={styles.description}>{item.description}</div>
      <div className={styles.bottomSection}>
        <div className={styles.stream}>{item.stream}</div>
        <div className={styles.uniContainer}>
          <img src={item.university} alt="uni" />
        </div>
      </div>
    </div>
  );
};

export default successCard;
