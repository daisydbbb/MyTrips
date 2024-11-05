import styles from "./Logo.module.css";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <img src="/icon.png" alt="MyTrips logo" className={styles.logo} />
    </Link>
  );
}

export default Logo;
