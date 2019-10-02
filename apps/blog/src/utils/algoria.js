// const pageQuery = `{
//   pages: allMarkdownRemark(
//     filter: {
//     }
//   ) {
//     edges {
//       node {
//         objectID: id
//         frontmatter {
//           title
//         }
//       }
//     }
//   }
// }`

const postQuery = `{
  posts: allMarkdownRemark(filter: {}) {
    edges {
      node {
        id
        fields {
          slug
        }
        excerpt(pruneLength: 5000)
        fields {
          slug
        }
      }
    }
  }
}`

const flatten = arr =>
  arr.map(({ node: { frontmatter, ...rest } }) => ({
    ...frontmatter,
    ...rest,
  }))
const settings = { attributesToSnippet: [`excerpt:20`] }
const queries = [
  // {
  //   query: pageQuery,
  //   transformer: ({ data }) => flatten(data.pages.edges),
  //   indexName: `Pages`,
  //   settings,
  // },
  {
    query: postQuery,
    transformer: ({ data }) => flatten(data.posts.edges),
    indexName: `Posts`,
    settings,
  },
]

module.exports = queries
