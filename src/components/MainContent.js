import React from 'react'
import FeaturedArticle from "../components/FeaturedArticle"
import ArticleList from "../components/ArticleList"
import CaseStudies from "../components/CaseStudies"
import Campaign from "../components/Campaign"

export default () => {
  
  return (
    <main className="main-content">
      <FeaturedArticle />
      <ArticleList /> 
      <CaseStudies />
      <Campaign />
    </main>
  )
}
