import { Link } from "react-router-dom";
import styles from "./index.module.scss"
import MainView from "../MainView";
import InvoiceView from '../InvoiceView'

const LoginPage = (props) => {
  return (
    <div className={styles.container}>
      <Link to='/'>Dyspozytura</Link>
      <Link to='/biuro'>Biuro</Link>
    </div>
  )
};

export default LoginPage;
