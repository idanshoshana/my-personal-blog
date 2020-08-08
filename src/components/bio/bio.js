/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { AiFillGithub, AiOutlineMedium, AiOutlineTwitter } from "react-icons/ai"
import { FaDev } from "react-icons/fa"

import styles from "./bio.module.css"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 200, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
            dev
            github
            medium
          }
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata
  const { github, dev, twitter, medium } = data.site.siteMetadata.social
  return (
    <div className={styles.container}>
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <div className={styles.bioContent}>
        <p className={styles.description}>{author.summary}</p>
        <div className={styles.linksWrapper}>
          <a className={styles.iconButton} href={`https://github.com/${github}`}>
            <AiFillGithub />
          </a>
          <a className={styles.iconButton} href={`https://medium.com/${medium}`}>
            <AiOutlineMedium />
          </a>
          <a className={styles.iconButton} href={`https://dev.to/${dev}`}>
            <FaDev />
          </a>
          <a className={styles.iconButton} href={`https://twitter.com/${twitter}`}>
            <AiOutlineTwitter />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Bio
