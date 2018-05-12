import React, { Component } from 'react'

export default class componentName extends Component {
  state = {
    sticky: true
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll(){
    let offsetTop  = this.instance.getBoundingClientRect().top;
    if (window.outerHeight >= offsetTop + 60){
      this.setState({
        sticky: false
      })
    } else if (!this.state.sticky){
      this.setState({
        sticky: true
      })
    }
  }

  render() {
    return (
      <section className="campaign-wrapper" ref={(el) => this.instance = el } >
        <div className={this.state.sticky ? "sticky" : ""} >
          <a href="/" className="btn inverted campaign"> Create a Campaign </a>
        </div>
    </section>
    )
  }
}

