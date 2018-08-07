import React, { Component } from "react";

class Video extends Component {
  constructor(props) {
    super(props);
    this.handleScrollCalcualtion = this.handleScrollCalcualtion.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScrollCalcualtion);
  }

  handleScrollCalcualtion(event) {
    const vScrollTop = event.target.scrollingElement.scrollTop;
    const heroText = document.querySelector(".hero-tag");
    heroText.style.transform = this.getScrollPosition(vScrollTop);
  }

  getScrollPosition(scrollTop) {
    return `translate(-50%, ${scrollTop / 4}%)`;
  }

  heroTagUnderline() {
    return (
      <div>
        <div className="circle textCenter">.</div>
      </div>
    );
  }


  render() {
    const {
      videoMp4,
      height,
      width,
      autoPlay,
      controls,
      loop,
      muted,
      taglinehead,
      taglineSubhead,
      scrollTarget,
    } = this.props;

    return (
      <section className="parallax-video-intro">
        <video
          height={height}
          width={width}
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          controls={controls}
        >
          <source src={videoMp4} type="video/mp4" />
        </video>
        <div className="hero-tag">
            <h1 className="cover-heading">{taglinehead}</h1>
            {this.heroTagUnderline()}
            <h2>{taglineSubhead}</h2>
        </div>
        <div className="intro-arrow" >
            <a href={scrollTarget} className="arrow">
                <i className="fa fa-angle-down"></i>
            </a>  
        </div>
    </section>  
    );
  }
}

Video.defaultProps = {
  height: "500",
  width: "1200",
  autoPlay: false,
  controls: false,
  loop: false,
  muted: false,
  taglinehead: '',
  taglineSubhead:'',
  scrollTarget: '',
};

module.exports = Video;
