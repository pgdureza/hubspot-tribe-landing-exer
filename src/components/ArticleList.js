import React from 'react'
import ArticleItem from '../components/ArticleItem'

export default () => {
  const articleImages = [
    "https://offers.tribegroup.co/hs-fs/hubfs/AALandingPages/Brand%20-%20Content%20Only/V1%20TRIBE%20Influencers%20-%203x.png",
    "https://offers.tribegroup.co/hs-fs/hubfs/AALandingPages/Brand%20-%20Content%20Only/Scale.png",
    "https://offers.tribegroup.co/hs-fs/hubfs/AALandingPages/Brand%20-%20Content%20Only/Only%20Pay%20for%20The%20Posts%20You%20Love2.png",
    "https://offers.tribegroup.co/hs-fs/hubfs/AALandingPages/Brand%20-%20Content%20Only/Create%20Brief.jpg"
  ]
  return (
    <section className="article-list inner-width">
      <h3> H3 Section Header </h3>
      { articleImages.map( (src, index) => (
        <ArticleItem imgSrc={src} key={index}/>
      ))}
    </section>
  )
}
