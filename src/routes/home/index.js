import React from 'react'
import Layout from '../../components/Layout'
import style from './home.css'
import introImage from './images/img_intro_2.png'

export default class Home extends React.Component {
  render () {
    return (
      <Layout>
        <div className={style['root']}>
          <section className={style['intro']}>
            <div className={style['section-container']}>
              <h1 className={style['intro-header']}>42network for online mobile performance</h1>
              <div>
                <button className={style['normal-affiliate-button']}>Affiliate</button>
                <button className={style['normal-advertiser-button']}>Advertiser</button>
              </div>
            </div>
            <img className={style['intro-image']} src={introImage} width='100%' alt='42network-intro' />
          </section >
          <section className={style['description']}>
            <div className={style['section-container']}>
              <h1 className={style['description-header']}>The Answer to the Ultimate Question of<br />Life, The Universe, and Everything:</h1>
              <div className={style['icon']} />
              <p className={style['description-body']}>
                <b>42Company India Pvt Ltd</b> is a fast growing online media company focussing on mobile entertainment services in India.
                Founded by mobile industry veterans, privately funded, we are an independent, owner-managed company.
                We have a dedicated team of professionals looking at analysing your advertising needs and providing best solutions.
              </p>
            </div>
          </section>
          <section className={style['diagram-bg']}>
            <div className={style['section-container']}>
              <div className={style['diagram']} />
              <div className={style['be-a-partner']}>
                <div className={style['affiliates']}>
                  <div className={style['flex-container']}>
                    <h1 className={style['partner-header']}>Affiliates</h1>
                    <div className={style['partner-description']}>You are publisher, ad network or media buyer. We deliver local monetisation</div>
                    <button className={style['affiliate-button']}>42 for Affiliates</button>
                  </div>
                </div>
                <div className={style['advertisers']}>
                  <div className={style['flex-container']}>
                    <h1 className={style['partner-header']}>Advertiser</h1>
                    <div className={style['partner-description']}>You are a mobile service provider or app developer. We deliver users, distribution and sales.</div>
                    <button className={style['advertiser-button']}>42 for Advertiser</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className={style['slogan']}>
            <div className={style['section-container']}>
              <h1>We deliver. That’s a promise!</h1>
              <p className={style['slogan-description']}>Collaborate with 42Network and see your business grow</p>
            </div>
          </section>
          <section className={style['partners']}>
            <div className={style['section-container']}>
              <div className={style['partners-header']}>
                Our Advertising partners
              </div>
              <div className={style['partners-header']}>
                Our Publisher partners
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}
