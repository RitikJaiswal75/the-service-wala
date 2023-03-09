import Card from "../Card/Card";
import "./Section.css";
function Section(props) {
  const cards = [];
  for (let i = 0; i < props.images.length; i++) {
    cards.push(
      <Card
        key={i}
        image={props.images[i]}
        heading={props.headings[i]}
        items={props.items[i]}
      ></Card>
    );
  }
  return (
    <section className="content" id={props.name}>
      <h1>{props.name}</h1>
      <h2>{props.short_description}</h2>
      <div className="card-holder">{cards}</div>
    </section>
  );
}

export default Section;
