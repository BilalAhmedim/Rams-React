import React from "react";
import './Hero.css';

const Hero = (props) => {
  return (
    <React.Fragment>
      <div className="hero">
        <img src={props.src} alt={props.alt} />
      </div>
    </React.Fragment>
  )
}

export default Hero;