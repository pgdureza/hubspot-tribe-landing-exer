import React from 'react'
import Image from './Image'
import Video from './Video';

export default () => {
  return (
    <header>
      <div className="overlay"> 
        <div className="inner-width">
          <div className="header-row">
            <div className="header-column">
              <Image className="logo" 
                src={'https://offers.tribegroup.co/hs-fs/hubfs/AALandingPages/Template%20Asset/TRIBE%20Logo%201000x309.png'} 
                widths={[160, 320]}/>
              <h1> H1 Headline </h1>
              <h2> H2 Subline </h2>
              <p> Paragraph Style // Lorem ipsum dolor sit amet, nec no brute nusquam civibus. Cibo essent qui id, in eius antiopam similique nam, at nostrum corrumpit vel. Lorem ipsum dolor sit amet, nec no brute nusquam civibus. Cibo essent qui id, in eius antiopam similique nam, at nostrum. </p>
              <a className="btn sign-up" href="https://brand.tribegroup.co/sign-up">
                <span>Sign Up for Free</span>
              </a>
            </div>
            <div className="header-column video-wrapper">
              <Video />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
