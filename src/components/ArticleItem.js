import React from 'react'
import Image from '../components/Image'

export default (props) => {

  return (
    <article className="article-item">
      <div className="row">
        <div className="column">
          <Image 
            src={props.imgSrc}
            widths={[450, 600, 900, 750, 1000]}
          />
        </div>
        <div className="column text-wrapper">
          <h2 className="inner-width-mobile">H2 Very Long Resource Title</h2>
          <p>Paragraph Style // Lorem ipsum dolor sit amet, nec no brute nusquam civibus. Cibo essent qui id, in eius antiopam similique nam, at nostrum corrumpit vel.</p>
          <a href="link"> READ NOW &nbsp; >  </a>
        </div>
      </div>
    </article>
  )
}
