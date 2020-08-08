/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Bio from "../bio/bio"

import styles from "./bio-wrapper.module.css"

const BioWrapper = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topWrapper}>
        <div className={styles.dotWrapper}>
          <div className={styles.redDot}></div>
          <div className={styles.yellowDot}></div>
          <div className={styles.greenDot}></div>
        </div>
      </div>
      <Bio />
    </div>
  )
}

export default BioWrapper
