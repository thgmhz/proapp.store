import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import SearchBar from '../../components/SearchBar/SearchBar'
import CategoriesMenu from '../../components/Menu/Categories/Categories'

class Home extends Component {
  // constructor () {
  //   super ()
  // }

  render () {
    return (
      <React.Fragment>
        <Header />
        <SearchBar />
        <CategoriesMenu />
      </React.Fragment>
    )
  }
}

export default Home