import React from 'react'
import PropTypes from 'prop-types'
import './Layout.css'
import Header from '../Header'
import Footer from '../Footer'

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

export default Layout
