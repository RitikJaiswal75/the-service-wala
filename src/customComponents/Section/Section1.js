import React, { useState } from 'react';
import Slider from '../Slider/slider';
import detail2 from "../Slider/SliderApi";
import "./Section.css";


const Section1 = (props) => {

  const [Data2] = useState(detail2);
  return (
    <>
      <section1 className="content" id={props.name}>
        <h1>{props.name}</h1>
        <h2>{props.short_description}</h2>
        <div>
          <Slider Data2={Data2}/>
        </div>
      </section1>

    </>
  )
}

export default Section1;
