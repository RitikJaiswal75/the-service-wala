import "./Footer.css";

function Footer(props) {
  return (
    <>
    <footer>{props.company}<br></br>{props.developer}</footer>;
    </>
  )
}

export default Footer;
