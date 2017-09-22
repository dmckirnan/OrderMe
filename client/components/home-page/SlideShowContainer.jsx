import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './../../styles/Ad.scss';

const SlideShowContainer = props =>
  (
    <div>
      <ReactCSSTransitionGroup
        transitionName="example"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        <img src={props.slide} alt="test" />
      </ReactCSSTransitionGroup>
    </div>
  );

SlideShowContainer.propTypes = {
  slide: PropTypes.string.isRequired,
};

export default SlideShowContainer;
