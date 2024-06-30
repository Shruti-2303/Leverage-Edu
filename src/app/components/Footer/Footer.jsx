import React from "react";
import styles from "./footer.module.scss";
const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footer}>
        <div className={styles.whiteDiv}>
          <div className={styles.upperHalf}>
            <div className={styles.left}>
              <div className={styles.logoContainer}>
                <img
                  src="https://res.cloudinary.com/ddtemnyax/image/upload/v1719573090/LeveragePics/logo-dark_tmwynp.svg"
                  alt="logo"
                />
              </div>

              <div className={styles.socials}>
                <a
                  href="https://www.instagram.com/leverageedu/"
                  target="_blank"
                >
                  <img
                    src="https://res.cloudinary.com/ddtemnyax/image/upload/v1719573083/LeveragePics/image__vmgyh0.webp"
                    alt=""
                  />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCGn54Lhkb_CjGMwA8HEzgTg?app=desktop"
                  target="_blank"
                >
                  <img
                    src="https://res.cloudinary.com/ddtemnyax/image/upload/v1719573082/LeveragePics/image__1_hotjee.webp"
                    alt=""
                  />
                </a>
                <a href="https://x.com/leverageedu" target="_blank">
                  <img
                    src="https://res.cloudinary.com/ddtemnyax/image/upload/v1719573082/LeveragePics/image__2_usk3hp.webp"
                    alt=""
                  />
                </a>
                <a
                  href="https://www.linkedin.com/company/leverage-edu/mycompany/"
                  target="_blank"
                >
                  <img
                    src="https://res.cloudinary.com/ddtemnyax/image/upload/v1719573083/LeveragePics/image__3_odugu4.webp"
                    alt=""
                  />
                </a>
                <a href="https://www.facebook.com/LeverageEdu/" target="_blank">
                  <img
                    src="https://res.cloudinary.com/ddtemnyax/image/upload/v1719573083/LeveragePics/image__4_cbut9v.webp"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className={styles.right}>
              <div>About</div>
              <div>Apply Now</div>
            </div>
          </div>
          <div className={styles.lowerHalf}>
            <a href="https://leverageedu.com/terms-and-conditions/#studyAbroadScholarship">
              Our Terms
            </a>
            <div>|</div>
            <a href="https://leverageedu.com/privacy-policy/">Privacy Policy</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
