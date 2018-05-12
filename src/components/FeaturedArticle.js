import React from 'react'
import Image from '../components/Image'

export default () => {
  return (
    <section className="featured-article">
        <div className="inner-width">
          <div className="row">
            <div className="column header-wrapper inner-width-mobile">
              <h2>H2 Long Section Heading</h2>
            </div>
            <div className="column feature-image-wrapper">
                <Image className="header-img"
                  src={"https://www.tribegroup.co/hs-fs/hubfs/AAWebsiteAssets/HOME/TRIBE-Inbox-Reduced.jpg"}
                  widths={[300, 600, 900, 1200]} />
            </div>
            <div className="column subheader-wrapper inner-width-mobile">
              <p> Paragraph Style // Lorem ipsum dolor sit amet, nec no brute nusquam civibus. Cibo essent qui id, in eius antiopam similique nam, at nostrum corrumpit vel. Lorem ipsum dolor sit amet, nec no brute nusquam civibus.  </p>
              <div className="watch-now-wrapper">
                <a className="btn outlined watch-now" href="https://offers.tribegroup.co/content-only-campaigns-for-brands"> Watch Now &nbsp; >  </a>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
