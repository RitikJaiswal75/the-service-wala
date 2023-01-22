import Card from "../Card/Card";
import "./Section.css";
function Section(props) {
  return (
    <section className="content" id={props.name}>
      <h1>{props.name}</h1>
      <h2>{props.short_description}</h2>
      <div className="card-holder">
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </section>
  );
}

export default Section;
