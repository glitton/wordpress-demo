import React from "react"
import { graphql } from "gatsby"

const PageTemplate = ({ data }) => {
  return (
    <div>
      <h1>{data.wpPage.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.wpPage.content }} />
    </div>
  )
}

export const query = graphql`
  query($id: String!) {
    wpPage(id: { eq: $id }) {
      date
      content
      title
    }
  }
`

export default PageTemplate
