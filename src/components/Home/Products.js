import React from "react"
import Product from "./Product"
import Title from "../Globals/Title"
import { StaticQuery, graphql } from "gatsby"

const getProduct = graphql`
  query {
    products: allContentfulCoffeeProduct {
      edges {
        node {
          title
          price
          id
          image {
            fluid(maxHeight: 426) {
              src
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`
function Products(props) {
  return (
    <StaticQuery
      query={getProduct}
      render={data => {
        return (
          <section className="py-5">
            <div className="container">
              <Title title="our products" />
              <div className="row">
                {data.products.edges.map(({ node: product }) => {
                  return <Product key={product.id} product={product} />
                })}
              </div>
            </div>
          </section>
        )
      }}
    />
  )
}

export default Products
