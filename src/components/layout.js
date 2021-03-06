import React from 'react'
import Footer from './footer'
import Nav from './nav'
import SEO from './seo'

const Layout = ({ title, description, image, article, children, ...rest }) => {
  return (
    <div {...rest}>
      <SEO
        title={title}
        description={description}
        image={image}
        article={article}
      />
      <Nav />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
