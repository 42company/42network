import React from 'react'
import Layout from '../../components/Layout'
import style from './notFound.css'

export default class notFound extends React.Component {
  render() {
    return (
      <Layout>
        <section className={style['submitted']}>
          <div className={style['submitted-wrapper']}>
            <h1 className={style['submitted-header']}>The page you're looking for could not be found</h1>
            <div className={style['submitted-image']}/>
          </div>
        </section>
      </Layout>
    )
  }
}
