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

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const pageQuery = graphql`
  query {
    grado: file(relativePath: { eq: "grado-rs2e.jpg" }) {
       ...fluidImage
    }

    gradoBox: file(relativePath: { eq: "grado-rs2e-box.jpg" }) {
       ...fluidImage
    }

    gradoMounted: file(relativePath: { eq: "grado-rs2e-mounted.jpg" }) {
       ...fluidImage
    }
  }
`
