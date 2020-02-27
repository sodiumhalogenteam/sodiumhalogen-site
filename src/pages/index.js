import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <h1 className="text-center mt-32">The Designtific Method</h1>
    <h2 className="text-center">The Perfect Blend of Design and Science</h2>
    <p className="text-center">
      We use design science to strategize how to accomplish your goals. We will
      always consider what is best for your customer and design with their needs
      and experience in mind.
    </p>

    <h1 className="text-center mt-32">What We Create & Develop in the Lab</h1>
    <div className="grid grid-cols-3 gap-3">
      <div className="bg-gray-500 h-16"></div>
      <div className="bg-gray-400 h-16"></div>
      <div className="bg-gray-300 h-16"></div>
      <div className="bg-gray-400 h-16"></div>
      <div className="bg-gray-300 h-16"></div>
      <div className="bg-gray-500 h-16"></div>
    </div>

    <h2 className="text-center mt-32">
      My testimial is so influental, it will definitely get you customers
    </h2>
    <p className="text-center">- coolest customer</p>

    {/* case study photos */}

    <h1>We've Helped Over 300 Companies from Startups to Enterprise</h1>
  </Layout>
)

export default IndexPage
