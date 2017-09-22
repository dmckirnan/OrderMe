import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class SlideShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: ['https://www.espressosupply.com/sites/all/files/imagecache/product_full/18520BL.png', 'https://images-na.ssl-images-amazon.com/images/I/31aiBakx4kL.jpg'],
    };
    this.state.max = this.state.slides.length;
    this.state.activeSlide = this.state.slides[0];
    this.state.active = 0;
    this.tick = this.tick.bind(this);
  }
  componentDidMount() {
    this.timer = setInterval(this.tick, 3000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  tick() {
    if (this.state.active === this.state.max - 1) {
      this.state.active = 0;
    } else {
      this.state.active += 1;
    }
    this.state.activeSlide = this.state.slides[this.state.active];
    this.setState(this.state);
  }
  render() {
    return (
      <div>
        <SlideShowContainer
          className="slideshowContainer"
          slide={this.state.activeSlide}
        />
      </div>
    );
  }
}

class SlideShowContainer extends React.Component {
  render() {
    return (
      <div>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          <img src={this.props.slide} alt="test" />
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default SlideShow;
