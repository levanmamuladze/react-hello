import React from "react";
import Footer from "./footer.jsx";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";


const Home = () => {
  const cards = [1, 2, 3, 4];
  
  return (
    <div>
      <div className="g-0">
        <Navbar />
      </div>
      <div
        className="container p-5  rounded"
        style={{ backgroundColor: "#E0E0E0" }}
      >
        <Jumbotron />
      </div>
      <div className="container g-0">
        <div className="row">
          {cards.map((card) => (
            <div className="col-lg-3 col-md-6 mb-4 pt-3" key={card}>
              <Card />
            </div>
          ))}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
export default Home;
