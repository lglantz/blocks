/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

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

exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions
  // const ymlDoc = yaml.safeLoad(fs.readFileSync("./index.yaml", "utf-8"));
  // const blogPostTemplate = path.resolve(`src/templates/blogTemplate.js`)
  const result = await graphql(`
    {
      allMdx(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
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

  console.log("here", result.data.allMdx.edges)
}
