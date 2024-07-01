import React from "react";
import styles from "./readysetgo.module.scss";
const ReadySetGo = () => {
  return (
    <div>
      <div className={styles.bluegradientDiv}>
        <span className={styles.heading}>READY SET GO ?</span>
        <button>Apply Now</button>
      </div>
    </div>
  );
};

export default ReadySetGo;
