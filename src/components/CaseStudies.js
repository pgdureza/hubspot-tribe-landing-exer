import React from 'react'

export default () => {
  return (
    <section className="case-studies">
      <h3> Case Studies </h3>
      <div className="cs-wrapper">
        { articleImages.map((img, index) => (
          <div className="cs-item" key={index}>
            <img className="main" src={img.main} alt=""/>
            <img className="sub" src={img.sub} alt=""/>
          </div>
        ))}
      </div>
      <a href="/" className="btn inverted"> Create a Campaign </a>
    </section>
  )
}

const articleImages = [
  {
    main: "https://www.tribegroup.co/hs-fs/hubfs/AAWebsiteAssets/CASE%20STUDIES/Cadbury/M-CSTile-Cadbury-Image-1024x294.jpg",
    sub:  "https://www.tribegroup.co/hs-fs/hubfs/AAWebsiteAssets/CASE%20STUDIES/Cadbury/D-CSTile-BrandName-Logo-1024x683.png",
  },
  {
    main: "https://www.tribegroup.co/hs-fs/hubfs/AAWebsiteAssets/CASE%20STUDIES/Spotify/M-CSTile-BrandName-Image-1024x294.png",
    sub:  "https://www.tribegroup.co/hs-fs/hubfs/AAWebsiteAssets/CASE%20STUDIES/Spotify/D-CSTile-BrandName-Logo-1024x683.png",
  },
  {
    main: "https://www.tribegroup.co/hs-fs/hubfs/AAWebsiteAssets/CASE%20STUDIES/Guzman%20Y%20Gomez/M-CSTile-BrandName-Image-1024x294.jpg",
    sub:  "https://www.tribegroup.co/hs-fs/hubfs/AAWebsiteAssets/CASE%20STUDIES/Guzman%20Y%20Gomez/D-CSTile-BrandName-Logo-1024x683.png",
  },
  {
    main: "https://www.tribegroup.co/hs-fs/hubfs/AAWebsiteAssets/CASE%20STUDIES/Thankyou/M-CSTile-Thankyou-Image-1024x294.jpg",
    sub:  "https://www.tribegroup.co/hs-fs/hubfs/Tribe%202017/Case%20Studies/ThankYouShadow3.png",
  },
  {
    main: "https://www.tribegroup.co/hs-fs/hubfs/AAWebsiteAssets/CASE%20STUDIES/STORK/M-CSTile-Stork-Image-1024x294.jpg",
    sub:  "https://www.tribegroup.co/hs-fs/hubfs/Tribe%202017/Case%20Studies/StorkShadow3.png",
  },
  {
    main: "https://www.tribegroup.co/hs-fs/hubfs/AAWebsiteAssets/CASE%20STUDIES/Swisse/D-CSTile-Swisse-Image-1024x683.jpg",
    sub:  "https://www.tribegroup.co/hs-fs/hubfs/Tribe%202017/Case%20Studies/SwisseShadow2.png",
  },
  {
    main: "https://www.tribegroup.co/hs-fs/hubfs/AAWebsiteAssets/CASE%20STUDIES/Dan%20Murphys/M-CSTile-DanMurphys-Image-1024x294.jpg",
    sub:  "https://www.tribegroup.co/hs-fs/hubfs/Tribe%202017/Case%20Studies/DanMurphysShadow2.png",
  },
  {
    main: "https://www.tribegroup.co/hs-fs/hubfs/AAWebsiteAssets/CASE%20STUDIES/THR1VE/M-CSTile-BrandName-Image-1024x294.jpg",
    sub:  "https://www.tribegroup.co/hs-fs/hubfs/AAWebsiteAssets/CASE%20STUDIES/THR1VE/D-CSTile-THRIVE-Logo-1024x683.png",
  },
  {
    main: "https://www.tribegroup.co/hs-fs/hubfs/AAWebsiteAssets/CASE%20STUDIES/Gelato%20Fiasco/M-CSTile-GF-Image-1024x294.jpg",
    sub:  "https://www.tribegroup.co/hs-fs/hubfs/AAWebsiteAssets/CASE%20STUDIES/Gelato%20Fiasco/D-CSTile-GF-Logo-1024x683.png",
  },
  {
    main: "https://www.tribegroup.co/hs-fs/hubfs/AAWebsiteAssets/CASE%20STUDIES/Cadbury/M-CSTile-Cadbury-Image-1024x294.jpg",
    sub:  "https://www.tribegroup.co/hs-fs/hubfs/AAWebsiteAssets/CASE%20STUDIES/Cadbury/D-CSTile-BrandName-Logo-1024x683.png",
  }
]
