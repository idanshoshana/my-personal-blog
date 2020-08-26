const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPost = path.resolve(`./src/templates/blog-post/blog-post.js`);
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    throw result.errors;
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges;

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;

    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const tweets = [
    { codeBlock: '<blockquote class="twitter-tweet" data-theme="light"><p lang="en" dir="ltr">We like the title &quot;You should Use Strapi&quot; 😎<br><br>Here&#39;s why 👇🤘<a href="https://t.co/DsvzrC9Nxt">https://t.co/DsvzrC9Nxt</a> by <a href="https://twitter.com/ThePracticalDev?ref_src=twsrc%5Etfw">@thepracticaldev</a></p>&mdash; Strapi (@strapijs) <a href="https://twitter.com/strapijs/status/1296715050510684160?ref_src=twsrc%5Etfw">August 21, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>'},
    { codeBlock: '<blockquote class="twitter-tweet"><p lang="en" dir="ltr">❤️ You Should Use Strapi by <a href="https://twitter.com/idan_shoshana?ref_src=twsrc%5Etfw">@idan_shoshana</a> . ⤵️<br> <a href="https://t.co/pwFGyGc03m">https://t.co/pwFGyGc03m</a></p>&mdash; Strapi (@strapijs) <a href="https://twitter.com/strapijs/status/1298045191555776513?ref_src=twsrc%5Etfw">August 24, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>' },
  ]
  tweets.forEach((tweet, index) => {
    const node = {
      codeBlock: tweet.codeBlock,
      id: createNodeId(`Tweet-${index}`),
      internal: {
        type: "Tweet",
        contentDigest: createContentDigest(tweet),
      },
    }
    actions.createNode(node)
  })
}