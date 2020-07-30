import React from "react"
import Layout from "../components/layout"
import svg from "../images/under_construction.svg"

const blog = () => {
  return (
    <Layout title="Blog">
      <section className="section">
        <div className="container">
          <h1 className="title is-size-1-desktop">I'm Working On It!</h1>
          <h2 className="subtitle is-size-3-desktop">I Promise</h2>
          <img src={svg} alt="construction illustration" />
        </div>
      </section>
    </Layout>
  )
}

export default blog
