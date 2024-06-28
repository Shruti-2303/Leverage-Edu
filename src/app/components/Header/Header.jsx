import React from "react";
import styles from "./header.module.scss";
const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.header}>
        <a href="/" className={styles.logoContainer}>
          <img src="https://res.cloudinary.com/ddtemnyax/image/upload/v1719498696/LeveragePics/le_white_logo_new_e8lexw.png" />
        </a>

        <div className={styles.items}>
          <a
            href="https://leverageedu.com/study-abroad-scholarship/tel:%201800572129/"
            target="_blank"
          >
            <button href="https://leverageedu.com/study-abroad-scholarship/tel:%201800572129/">
              Call us @ 1800123456
            </button>
          </a>
          <a
            href="https://leverageedu.com/study-abroad-scholarship/tel:%201800572129/"
            target="_blank"
            className={styles.phone}
          >
            <img src="https://res.cloudinary.com/ddtemnyax/image/upload/v1719499055/LeveragePics/icons8-phone-24_l30lb5.png" />
          </a>

          <a
            href="hhttps://api.whatsapp.com/send?phone=919870508651&text=Hi,%20I%20would%20like%20to%20know%20more%20about%20the%20study%20abroad%20scholarship%20offer"
            target="_blank"
            className={styles.whatsapp}
          >
            <img src="https://res.cloudinary.com/ddtemnyax/image/upload/v1719498696/LeveragePics/whatsapp-icon-2_iqnidq.svg" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
