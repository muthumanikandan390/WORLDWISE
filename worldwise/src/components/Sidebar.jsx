import styles from './Sidebar.module.css'
import Logo from "./Logo"
import AppNav from "./AppNav"



function Sidebar() {


  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <p className={styles.copyright}> List of cities</p>
      <footer className={styles.footer}>

        &copy; Copyright {new Date().getFullYear()} by WorldWise Inc.

      </footer>


    </div>
  )
}

export default Sidebar
