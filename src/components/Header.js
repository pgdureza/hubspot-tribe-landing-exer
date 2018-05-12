import React, { Component } from 'react'
import Image from './Image'
import WistiaEmbed from './WistiaEmbed';

export default class componentName extends Component {

  state = {
    isVideoMedia: true
  }

  componentDidMount(){
    // create global function for showcasing image instead of wistia video
    window.toggleHeaderMedia = () => {
      this.setState({
        isVideoMedia: !this.state.isVideoMedia
      })
    }
  }

  render() {
    return (
      <header>
        <div className="overlay"> 
          <div className="inner-width">
            <div className="header-row">
              <div className="header-column inner-width-mobile">
                <Image className="logo" 
                  src={'https://offers.tribegroup.co/hs-fs/hubfs/AALandingPages/Template%20Asset/TRIBE%20Logo%201000x309.png'} 
                  widths={[160, 320]}/>
                <h1> H1 Headline </h1>
                <h2> H2 Subline </h2>
                <p> Paragraph Style // Lorem ipsum dolor sit amet, nec no brute nusquam civibus. Cibo essent qui id, in eius antiopam similique nam, at nostrum corrumpit vel. Lorem ipsum dolor sit amet, nec no brute nusquam civibus. Cibo essent qui id, in eius antiopam similique nam, at nostrum. </p>
                <div className="sign-up-wrapper">
                <a className="btn sign-up" href="https://brand.tribegroup.co/sign-up">
                  <span>Sign Up for Free</span>
                </a>
                </div>
              </div>
              <div className="header-column media-wrapper">
                { this.state.isVideoMedia ? (
                  <WistiaEmbed hashedId="c6me94lwri" playerColor="#f848c4" />
                ) : (
                  <Image 
                    widths={[300, 600, 900]} 
                    src={'https://www.tribegroup.co/hs-fs/hubfs/AAWebsiteAssets/BRANDS/Brand%20Manager%20Profile%20Picture.jpg'} 
                  />
                )}
                
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}
