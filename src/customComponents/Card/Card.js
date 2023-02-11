import "./Card.css";
import detail from './CardApi';

const Card = ({Data}) => {
  return(
    <>
        {Data.map((curElem) => {
        const { image, name,description } = curElem;
        return(
          <>
          <div className="card">
          <div className="image-container">
            <img src={image} alt="zscz"/>
          </div>
          <div className="name">
            <p>{name}</p>
          </div>
          <div className="description">
            <p>{description}</p>
          </div>
        </div>
        </>
        )
        
      })}
    </>
  );
};





// function Card(props) {
//   return (
//     <div className="card">
//       <div className="image-container">
//         <img src="./assets/first.png" alt="zscz"></img>
//       </div>
//       <div className="description">
//         <p>So i have a simple button with a shiny effect run through using ::after and transform.So i have a simple button with a shiny effect run through using ::after and transform.So i have a simple button with a shiny effect run through using ::after and transform.So i have a simple button with a shiny effect run through using ::after and transform.So i have a simple button with a shiny effect run through using ::after and transform.</p>
//       </div>
//     </div>
//   );
// }

export default Card;
