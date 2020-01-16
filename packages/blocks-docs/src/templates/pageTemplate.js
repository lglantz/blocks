import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Location } from "@reach/router"
import Layout from "../components/layout"

export default function Template({ data }) {
  const { frontmatter, body } = data.mdx
  // const navigation = data.allIndexJson.edges.map(edge => ({
  //   ...edge.node,
  //   selected: edge.node.subsections[0].name,
  // }))
  // console.log("navigation", navigation)

  return (
    <Location>
      {({ location }) => (
        <Layout location={location}>
          <div className="markdown-body" style={{ padding: 40 }}>
            <MDXRenderer>{body}</MDXRenderer>
          </div>
        </Layout>
      )}
    </Location>
  )
}

export const pageQuery = graphql`
  query($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        path
      }
    }
  }
`
