import React from 'react'
import animate from 'animate.css'
import ScrollAnimation from '../../components/utils/ScrollAnimation'
import Layout from '../../components/Layout'
import Contact from '../../components/Contact'
import style from './affiliate.css'

export default class Affiliate extends React.Component {
  render () {
    const scrollFadeInProps = { animateIn: `${animate['animated']} ${animate['fadeIn']}` }

    return (
      <Layout>
        <section className={style['banner']}>
          <div className={style['banner-section-container']}>
            <div className={style['banner-image']} />
            <div className={style['banner-description']}>
              <h1 className={style['banner-description-head']}>You are a mobile publisher,<br />ad network or media buyer.</h1>
              <p className={style['banner-description-body']}>We help you monetise your traffic!</p>
            </div>
          </div>
        </section>
        <section className={style['contact']}>
          <div className={style['section-container']}>
            <div className={style['flex-box']}>
              <div className={style['flex-description-content-container']}>
                <div className={style['ic-media']} />
                <div className={style['description-wrapper']}>
                  <h3 className={style['contact-header']}>
                    MEDIA BUYERS
                  </h3>
                  <p className={style['description-body']}>
                    At any given time we test 500+ camapigns on
                    our network to evaluate performance and competitiveness.
                    We focus on premium offers for premium media buyers
                  </p>
                </div>
                <div className={style['divider']} />
                <div className={style['ic-network']} />
                <div className={style['description-wrapper']}>
                  <h3 className={style['contact-header']}>
                    AD NETWORKS
                  </h3>
                  <p className={style['description-body']}>
                    We help you fill a 100% of your unsold inventory.
                    Our monetisation on performance allows you to benchmark
                    new traffic sources and find out what they are really worth.
                    Our high ecpm values will help you raise the
                    minimum bids for the media buyers in your network.
                  </p>
                </div>
              </div>
            </div>
            <div className={style['flex-box']}>
              <div className={style['flex-content-container']}>
                <Contact history={this.props.history} partnerType='affiliate' />
              </div>
            </div>
          </div>
        </section>
        <section className={style['benefits']}>
          <div className={style['benefits-section-container']}>
            <div className={style['flex-box']}>
              <div className={style['flex-content-container']}>
                <ScrollAnimation {...scrollFadeInProps}>
                  <div className={style['ic-performance']} />
                </ScrollAnimation>
                <h3 className={style['benefits-header']}>TOP PERFORMANCE CAMPAIGNS</h3>
                <p className={style['benefits-description']}>
                  - Exclusive Offers<br />
                  - India Geo Specialisation<br />
                  - Targeting
                </p>
              </div>
            </div>
            <div className={style['flex-box']}>
              <div className={style['flex-content-container']}>
                <ScrollAnimation {...scrollFadeInProps}>
                  <div className={style['ic-technology-support']} />
                </ScrollAnimation>
                <h3 className={style['benefits-header']}>TECHNOLOGY SUPPORT</h3>
                <p className={style['benefits-description']}>
                  - Complete support for postback queries<br />
                  - 24X7 tech support
                </p>
              </div>
            </div>
            <div className={style['flex-box']}>
              <div className={style['flex-content-container']}>
                <ScrollAnimation {...scrollFadeInProps}>
                  <div className={style['ic-ecpm']} />
                </ScrollAnimation>
                <h3 className={style['benefits-header']}>TOP eCPM VALUES</h3>
                <p className={style['benefits-description']}>
                  - Testing and Optimisation for best results<br />
                  - 100% focus on performance
                </p>
              </div>
            </div>
            <div className={style['flex-box']}>
              <div className={style['flex-content-container']}>
                <ScrollAnimation {...scrollFadeInProps}>
                  <div className={style['ic-account-management']} />
                </ScrollAnimation>
                <h3 className={style['benefits-header']}>DEDICATED ACCOUNT MANAGEMENT</h3>
                <p className={style['benefits-description']}>
                  - Round the clock response<br />
                  - Focus on ROI <br />
                  - Key focus : no scrapping
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={style['slogan']}>
          <div className={style['section-container']}>
            <h1>
              Collaborate now!<br />
              Our eCPMs are our best performance proof.
            </h1>
          </div>
        </section>
      </Layout>
    )
  }
}
