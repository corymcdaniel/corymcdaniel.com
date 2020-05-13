import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Welcome to Atlanta</h1>
    <div>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/j5W73HaVQBg" frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
  </Layout>
)

export default NotFoundPage
