import { useState, useEffect } from "react";
import "./Carousel.css";

const Carousel = (props) => {
  const [image, setImage] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setImage((image + 1) % props.imgUrls.length);
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [image, props.imgUrls.length]);

  return (
    <div className="Carousel">
      <img src={props.imgUrls[image]} alt={"carousel Image" + image} />
    </div>
  );
};

export default Carousel;
