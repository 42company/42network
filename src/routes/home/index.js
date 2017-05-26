import React from 'react'
import { Link } from 'react-router-dom'
import animate from 'animate.css'
import Layout from '../../components/Layout'
import ScrollAnimation from '../../components/utils/ScrollAnimation'
import style from './home.css'
import skyLine from './images/bottom_skyline.png'

export default class Home extends React.Component {
  render () {
    const scrollFadeInProps = { animateIn: `${style['advertise-partner-container']} ${animate['fadeIn']} ${animate['animated']}` }

    return (
      <Layout>
        <div className={style['root']}>
          <section className={style['intro']}>
            <div className={style['intro-section-container']}>
              <h1 className={style['intro-header']}>42Network for online mobile performance</h1>
              <div>
                <Link className={style['normal-affiliate-button']} to='/affiliate'>Affiliates</Link>
                <Link className={style['normal-advertiser-button']} to='/advertiser'>Advertisers</Link>
              </div>
            </div>
            <div className={style['intro-image-wrapper']}>
              <div className={style['intro-image-device']}/>
              <div className={style['intro-image-graph']}/>
              <div className={style['intro-image-cloud']}/>
            </div>
          </section >
          <section className={style['description']}>
            <div className={style['section-container']}>
              <h1 className={style['description-header']}>The Answer to the Ultimate Question of<br />Life, The Universe, and Everything:</h1>
              <div className={style['icon']} />
              <p className={style['description-body']}>
                <b>42Company India Pvt Ltd</b> is a fast growing online media company focusing on mobile entertainment services in India.
                Founded by mobile industry veterans, privately funded, we are an independent, owner-managed company.
                We have a dedicated team of professionals looking at analysing your advertising needs and providing best solutions.
              </p>
            </div>
          </section>
          <section className={style['diagram-bg']}>
            <div className={style['section-container']}>
              <ScrollAnimation animateIn={`${animate['fadeIn']} ${animate['animated']}`}>
                <div className={style['diagram']} />
              </ScrollAnimation>
              <div className={style['be-a-partner']}>
                <div className={style['affiliates']}>
                  <div className={style['flex-container']}>
                    <h1 className={style['partner-header']}>Affiliates</h1>
                    <div className={style['partner-description']}>You are publisher,<br />ad network or media buyer. We deliver local monetisation</div>
                    <Link className={style['affiliate-button']} to='/affiliate'>42 for Affiliates</Link>
                  </div>
                </div>
                <div className={style['advertisers']}>
                  <div className={style['flex-container']}>
                    <h1 className={style['partner-header']}>Advertisers</h1>
                    <div className={style['partner-description']}>You are a mobile service provider or app developer. We deliver users, distribution and sales.</div>
                    <Link className={style['advertiser-button']} to='/advertiser'>42 for Advertisers</Link>
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
            <div className={style['partner-section-container']}>
              <div className={style['advertise-partners-header']}>
                Our Advertising partners
              </div>
                <div className={style['partner-wrapper']}>
                  <ScrollAnimation {...scrollFadeInProps}>
                    <div className={style['ic-dogether']} />
                  </ScrollAnimation>
                  <ScrollAnimation {...scrollFadeInProps}>
                    <div className={style['ic-myntra']} />
                  </ScrollAnimation>
                  <ScrollAnimation {...scrollFadeInProps}>
                    <div className={style['ic-flipkart']} />
                  </ScrollAnimation>
                  <ScrollAnimation {...scrollFadeInProps}>
                    <div className={style['ic-orahi']} />
                  </ScrollAnimation>
                  <ScrollAnimation {...scrollFadeInProps}>
                    <div className={style['ic-uc']} />
                  </ScrollAnimation>
                  <ScrollAnimation {...scrollFadeInProps}>
                    <div className={style['ic-abof']} />
                  </ScrollAnimation>
                  <ScrollAnimation {...scrollFadeInProps}>
                    <div className={style['ic-buyhatke']} />
                  </ScrollAnimation>
                  <ScrollAnimation {...scrollFadeInProps}>
                    <div className={style['ic-panelstation']} />
                  </ScrollAnimation>
                </div>
            </div>
            <img className={style['home-bottom-image']} src={skyLine} width='100%' alt='skyline' />
          </section>
        </div>
      </Layout>
    )
  }
}
