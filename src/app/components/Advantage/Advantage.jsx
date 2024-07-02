import React from "react";
import styles from "./advantage.module.scss";
import Advcard from "./Advcard/Advcard";
import { advantageData } from "@/app/utils/data";
const Advantage = () => {
  return (
    <div className={styles.advContainer}>
      <div className={styles.advContent}>
        <div className={styles.advHeading}>
          Leverage Edu <span>Advantage</span>
        </div>
        <div className={styles.advDesc}>
          Personalised Attention Matched to Who You Are, Your Unique Profile &
          Your Unique Aspirations
        </div>
        <div className={styles.cardContainer}>
          {advantageData.map((item, index) => (
            <Advcard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Advantage;
