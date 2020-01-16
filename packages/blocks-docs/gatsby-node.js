const execSync = require("child_process").execSync

exports.onCreateWebpackConfig = ({ stage, actions, loaders, getConfig }) => {
  if (stage !== "develop") return

  console.log("blocks-base: building...")
  const buildBase = execSync("cd ../blocks-base; gulp build", {
    stdio: "inherit",
  })
  console.log("blocks-base: complete")
  console.log("blocks-react: building...")
  const buildReact = execSync("cd ../blocks-react; gulp build", {
    stdio: "inherit",
  })
  console.log("blocks-react: complete")

  return
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allMdx {
        edges {
          node {
            id
            body
            frontmatter {
              title
              section
              path
            }
          }
        }
      }
    }
  `)

  result.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: require.resolve("./src/templates/pageTemplate.js"),
      context: { id: node.id },
    })
  })
}
