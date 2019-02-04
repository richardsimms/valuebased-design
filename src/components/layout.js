import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Link from 'gatsby-link'
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <div>
          <main>{children}</main>
          <footer>
            <div className="FooterGroup">
              <div className="FooterTitleGroup">
                <p><a href="https://www.instagram.com/valuebased.design/channel/">Instagram</a></p>
                <p><Link to="/privacy">Privacy&nbsp;Policy</Link></p>
                <p>© {new Date().getFullYear()}, Richard Simms
                {` `}</p>
              </div>
            </div>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
