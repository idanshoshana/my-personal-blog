import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styles from "./post-preview.module.css"

const PostPreview = ({ node }) => {
  return (
    <div className={styles.container}>
      <Img
        className={styles.coverImg}
        fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
      />
      <div className={styles.contentContainer}>
        <header>
          <h3 className={styles.title}>
            <Link className={styles.titleLink} to={node.fields.slug}>
              {node.frontmatter.title || node.fields.slug}
            </Link>
          </h3>
        </header>
        <section className={styles.descriptionContainer}>
          <p
            className={styles.descriptionText}
            dangerouslySetInnerHTML={{
              __html: node.frontmatter.description || node.excerpt,
            }}
          />
          <Link className={styles.readMoreLink} to={node.fields.slug}>
            Read more
          </Link>
        </section>
      </div>
    </div>
  )
}

export default PostPreview
