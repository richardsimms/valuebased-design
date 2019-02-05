import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
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
