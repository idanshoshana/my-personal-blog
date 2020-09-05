import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styles from "./tweets.module.css";
import { FiTwitter } from "react-icons/fi";

const Tweets = () => {
  const data = useStaticQuery(graphql`
    query {
      allTweet {
        nodes {
          codeBlock
        }
      }
    }
  `);
  const tweets = data.allTweet.nodes;

  return (
    <div className={styles.container}>
      <h2 className={styles.tweetsTitle}>Tweets </h2> <FiTwitter />
      <div className={styles.tweetsContainer}>
        {tweets.map((tweet, index) => (
          <div
            key={index}
            className={styles.tweet}
            dangerouslySetInnerHTML={{
              __html: tweet.codeBlock,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Tweets;
