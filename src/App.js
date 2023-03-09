import logo from "./logo.jpg";
import "./App.css";
import Navbar from "./customComponents/Navbar/Navbar";
import Header from "./customComponents/Header/Header";
import Carousel from "./customComponents/Carousel/Carousel";
import Section from "./customComponents/Section/Section";
import Footer from "./customComponents/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar logo={logo} menuOptions={["Services", "Brands", "Contact"]} />
      <Header phone={["+919810863934"]} email={["vnelectrix@gmail.com"]} />
      <Carousel
        imgUrls={[
          "../assets/Carousel_Image_1.jpg",
          "../assets/Carousel_Image_2.jpg",
        ]}
      />
      <Section
        name="Services"
        short_description="We serve to your requests. Happy to help with"
        images={["../assets/indoor.png", "../assets/outdoor.png"]}
        headings={["Indoor Products", "Outdoor Products"]}
        items={[
          ["Ceiling Fan", "Table Fan", "Wall Fan", "BLDC Fan"],
          ["Street Light", "Flood Light"],
        ]}
      />
      <Section
        name="Brands"
        short_description="We are authorized service providers for the following brands"
        images={[]}
        headings={[]}
        items={[]}
      />
      <Section
        name="Contact"
        short_description="Want to get in touch? We are available on: "
        images={[]}
        headings={[]}
        items={[]}
      />
      <Footer developer="This website is designed and developed by Jaiswal Business Solutions." />
    </div>
  );
}

export default App;
