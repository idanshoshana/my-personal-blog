import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styles from "./posts-preview.module.css";
import PostPreview from "../post-preview/post-preview";
import { MdNewReleases } from "react-icons/md";

const PostsPreview = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            excerpt
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              description
              featuredImage {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `);
  const posts = data.allMarkdownRemark.edges;

  return (
    <div className={styles.container}>
      <h2 className={styles.postsTitle}>
        New Posts <MdNewReleases />
      </h2>
      <div className={styles.postsContainer}>
        {posts.map(({ node }) => (
          <PostPreview key={node.fields.slug} node={node} />
        ))}
      </div>
    </div>
  );
};

export default PostsPreview;
