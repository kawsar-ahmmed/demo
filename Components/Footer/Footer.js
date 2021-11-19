import styles from "./Footer.module.css";
import { BsTwitter } from "react-icons/bs";
import { SiDiscord } from "react-icons/si";
const Footer = () => {
  return (
    <div className={styles.main}>
      <div className={styles.footer}>
        <img src="./images/logo.png" alt="" className={styles.footerLogo} />
        <div className="py-2">
          <BsTwitter color="#1f3f80" className="mx-2" size="25px" />
          <SiDiscord color="#1f3f80" className="mx-2" size="25px" />
        </div>
      </div>
    </div>
  );
};
export default Footer;
