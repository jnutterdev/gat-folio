import React from "react"
import PropTypes from "prop-types"

import Header from "../components/Header"
import Footer from "../components/Footer"
import Hero from "./Hero"

const Layout = ({ children }) => {
  return (
    <div
      className="min-h-full grid"
      style={{
        gridTemplateRows: "auto 1fr auto",
      }}
    >
      <Header>My Portfolio</Header>
      <Hero />
      <main>{children}</main>
      <Footer>Footer</Footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.any,
}

export default Layout