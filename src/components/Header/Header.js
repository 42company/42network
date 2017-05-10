import React from 'react'
import style from './Header.css'
import Navigation from '../Navigation'

export default class Header extends React.Component {
  render() {
    return (
      <div className={style.root}>
        <div className={style.container}>
          Header
          <Navigation />
        </div>
      </div>
    )
  }
}
