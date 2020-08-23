import React from "react";
import styles from "./tweets.module.css";
import { FiTwitter } from "react-icons/fi";

const Tweets = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.tweetsTitle}>Tweets </h2> <FiTwitter />
      <div className={styles.tweetsContainer}>
        <div
          className={styles.tweet}
          dangerouslySetInnerHTML={{
            __html:
              '<blockquote class="twitter-tweet" data-theme="light"><p lang="en" dir="ltr">We like the title &quot;You should Use Strapi&quot; 😎<br><br>Here&#39;s why 👇🤘<a href="https://t.co/DsvzrC9Nxt">https://t.co/DsvzrC9Nxt</a> by <a href="https://twitter.com/ThePracticalDev?ref_src=twsrc%5Etfw">@thepracticaldev</a></p>&mdash; Strapi (@strapijs) <a href="https://twitter.com/strapijs/status/1296715050510684160?ref_src=twsrc%5Etfw">August 21, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          }}
        />
      </div>
    </div>
  );
};

export default Tweets;
