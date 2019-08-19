import React from "react"
import Image from 'gatsby-image';
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const GradoPage = ({data}) => (
  <Layout>
    <SEO title="Grado" />
    <h1>Grado Headphones ShowCase</h1>
    <h3>Grado</h3>
    <Image fluid={data.grado.childImageSharp.fluid} />
    <br/>
    <h3>Grado Boxed</h3>
    <Image fluid={data.gradoBox.childImageSharp.fluid} />
    <br/>
    <h3>Grado Mounted</h3>
    <Image fluid={data.gradoMounted.childImageSharp.fluid} />
  </Layout>
)

export default GradoPage

export const pageQuery = graphql`
  query {
    grado: file(relativePath: { eq: "grado-rs2e.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    gradoBox: file(relativePath: { eq: "grado-rs2e-box.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    gradoMounted: file(relativePath: { eq: "grado-rs2e-mounted.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
