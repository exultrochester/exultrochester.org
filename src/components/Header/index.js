import React from 'react'
import Link from 'gatsby-link'
import { siteMetadata } from '../../../gatsby-config'

const NLink = ({ to, children, ...props }) => <Link to={to} className="nav-item nav-link"  activeClass="active">{children}</Link>

const Header = () => (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light"
    >
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <div className="navbar-nav">
          <NLink
            className="navbar-brand"
            to="/"
          >
            Exult Rochester
          </NLink>
          { siteMetadata.nav.map(item => (
          (!item.disabled) && <NLink to={item.to}>{item.text}</NLink>
          ))}
        </div>
      </div>
    </nav>
    )

export default Header
