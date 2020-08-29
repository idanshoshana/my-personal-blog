import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/seo/seo";
import BioWrapper from "../components/bio-wrapper/bio-wrapper";
import PostsPreview from "../components/posts-preview/posts-preview";
import Tweets from "../components/tweets/tweets";
import styles from "./index.module.css";

const BlogIndex = ({ location }) => {
  return (
    <Layout location={location}>
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