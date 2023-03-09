import "./Card.css";

function Card(props) {
  const items = [];
  props.items.forEach((element) => {
    items.push(<li key={element}>✅ {element}</li>);
  });
  return (
    <div className="card">
      <div className="image-container">
        <img src={props.image} alt={props.image}></img>
      </div>
      <div className="description">
        <h3 className="card-heading">{props.heading}</h3>
        <ul>{items}</ul>
      </div>
    </div>
  );
}

export default Card;
