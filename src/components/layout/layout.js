import React from "react";
import { Link, useStaticQuery } from "gatsby";
import styles from "./layout.module.css";
import ThemeSwitcher from "../theme-switcher/theme-switcher";
import useLastTheme from "../../hooks/use-last-theme";

const Layout = ({ location, children }) => {
  useLastTheme();
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author {
            name
          }
        }
      }
    }
  `);

  const { name: authorName } = data.site.siteMetadata.author;
  const title = `I'm ${authorName}`;
  const rootPath = `${__PATH_PREFIX__}/`;
  let header;

  if (location.pathname === rootPath) {
    header = (
      <h1 className={styles.rootPageHeader}>
        <Link className={styles.headerLink} to={`/`}>
          {title}
        </Link>
      </h1>
    );
  } else {
    header = (
      <h3 className={styles.pageHeader}>
        <Link className={styles.headerLink} to={`/`}>
          {title}
        </Link>
      </h3>
    );
  }

  return (
    <div className={styles.container}>
      <header className={styles.headerSection}>
        {header}
        <ThemeSwitcher />
      </header>
      <main>{children}</main>
      <footer className={styles.footerSection}>
        © {new Date().getFullYear()} {authorName}
      </footer>
    </div>
  );
};

export default Layout;
