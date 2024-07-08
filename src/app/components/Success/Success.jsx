import React from "react";
import styles from "./success.module.scss";
import SuccessCard from "./SuccessCard/SuccessCard";
import { successData } from "@/app/utils/data";
const Success = () => {
  return (
    <div className={styles.successContainer}>
      <div className={styles.successContent}>
        <div className={styles.title}>
          45,000+ <span>Success Stories</span>
        </div>
        <div className={styles.subTitle}>From Dreamers to Achievers</div>
        <div className={styles.successCards}>
          {successData.map((item, index) => (
            <SuccessCard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Success;
