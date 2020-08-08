import React from "react"
import { Link } from "gatsby"
import styles from "./layout.module.css"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1 className={styles.rootPageHeader}>
        <Link className={styles.headerLink} to={`/`}>
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3 className={styles.pageHeader}>
        <Link className={styles.headerLink} to={`/`}>
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <div className={styles.container}>
      <header className={styles.headerSection}>{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
