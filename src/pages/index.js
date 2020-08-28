import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/layout";
import SEO from "../components/seo/seo";
import BioWrapper from "../components/bio-wrapper/bio-wrapper";
import PostsPreview from "../components/posts-preview/posts-preview";
import Tweets from "../components/tweets/tweets";
import styles from "./index.module.css";

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Personal Blog" />
      <div className={styles.container}>
        <header>
          <BioWrapper />
        </header>
        <section>
          <PostsPreview />
        </section>
        <section>
          <Tweets />
        </section>
      </div>
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
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
`;
