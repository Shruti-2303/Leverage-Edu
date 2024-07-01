import React from "react";
import styles from "./hero.module.scss";
const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.hero}>
        <img
          src="https://res.cloudinary.com/ddtemnyax/image/upload/v1719751872/LeveragePics/Hero_image-02_aqi0nf.png"
          alt="bgimage"
        />
        <div className={styles.heroContent}>
          <div className={styles.leftSection}>
            <div className={styles.heroHeading}>
              Time To Unlock <br /> Those <span>Global Dreams!</span>
            </div>
            <div className={styles.heroText}>
              <span>HURRY! Apply now to avail:</span>
              <br />
              💰 20 students to receive a scholarship worth ₹1 lakh each
              <br />
              🎓 30 students to get a scholarship worth ₹50,000 each
              <br />
              💻 30 students to receive a brand new laptop
            </div>
          </div>
          <div className={styles.rightSection}>
            <div className={styles.formHeading}>Apply for Scholarship</div>
            <input type="text" placeholder="Enter Your Full Name" />
            <input type="text" placeholder="Email Address" />
            <input type="tel" placeholder="Phone Number" />
            <input type="text" placeholder="Pincode" />
            <select>
              <option name="first" id="">
                Select preffered study location
              </option>
              <option value="UK">UK</option>
            </select>
            <div className={styles.formCheck}>
              <input type="checkbox" className={styles.checkBox} />
              <div className={styles.checkText}>
                I have read and agreed to{" "}
                <a href="https://leverageedu.com/terms-and-conditions/#studyAbroadScholarship">
                  terms
                </a>{" "}
                &{" "}
                <a href="https://leverageedu.com/privacy-policy/">
                  privacy policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
