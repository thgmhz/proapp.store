import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import CategoriesMenu from '../../components/Menu/Categories'

class Home extends Component {
  // constructor () {
  //   super ()
  // }

  render () {
    return (
      <React.Fragment>
        <Header />
        <CategoriesMenu />
      </React.Fragment>
    )
  }
}

export default Home