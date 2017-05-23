import React from 'react'
import { Redirect } from 'react-router-dom'
import Layout from '../../components/Layout'
import style from './sent.css'

export default class sent extends React.Component {
  render() {
    const locationState = this.props.location.state
    return (
      <Layout>
        <section className={style['submitted']}>
          {
            (() => {
              if (locationState && locationState.sent) {
                return (
                  <div className={style['submitted-wrapper']}>
                    <h1 className={style['submitted-header']}>Thank you. We will shortly contact you.</h1>
                    <div className={style['submitted-image']}/>
                  </div>
                )
              } else {
                return (
                  <Redirect to='/not_found' />
                )
              }
            })()
          }
        </section>
      </Layout>
    )
  }
}
