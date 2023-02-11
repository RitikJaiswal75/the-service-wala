import React, { useState } from 'react';
import Card from "../Card/Card";
import detail from "../Card/CardApi";
import "./Section.css";


const Section = (props) => {

  const [Data] = useState(detail);
  return (
    <>
      <section className="content" id={props.name}>
        <h1>{props.name}</h1>
        <h2>{props.short_description}</h2>
        <div className="card-holder">
          <Card Data={Data} />
        </div>
      </section>

    </>
  )
}


export default Section;
