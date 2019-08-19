import React from "react"
import Image from 'gatsby-image';
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const GradoPage = ({data}) => (
  <Layout>
    <SEO title="Grado" />
    <h1>Grado Headphones ShowCase</h1>
    <h3>Fluid</h3>
    <Image fluid={data.gradoFluidImage.childImageSharp.fluid} />
    <br/>
    <h3>Fixed</h3>
    <Image fixed={data.gradoFixedImage.childImageSharp.fixed} />  
    <p>Grado Rs2e</p>
  </Layout>
)

export default GradoPage

export const pageQuery = graphql`
  query {
    gradoFluidImage: file(relativePath: { eq: "grado-rs2e.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    gradoFixedImage: file(relativePath: { eq: "grado-rs2e.jpg" }) {
      childImageSharp {
        fixed(width: 600, height: 401) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
