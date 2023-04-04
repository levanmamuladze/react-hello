import React from "react";
import Footer from "./footer.jsx";
import Navbar from "./navbar.jsx"
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";



//create your first component
const Home = () => {
	const cards = [1, 2, 3, 4]; 
	const cardComponents = []; 
    
	for (let i = 0; i < cards.length; i++) {
	  cardComponents.push(<Card key={cards[i]} />);

	}
  
	
  return (
    <div>
    <div className="g-0">
      <Navbar />
    </div>
      <div className="container p-5 mt-4 rounded" style={{backgroundColor: "#E0E0E0"}}>
        <Jumbotron />
      </div>
  <div className="container g-0">
        <div className="row">

          <div className="col-lg-3 col-md-6 mb-4 pt-3">
            <div className="card">{cardComponents[0]}</div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 pt-3">
            <div className="card">{cardComponents[1]}</div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 pt-3">
            <div className="card">{cardComponents[2]}</div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 pt-3">
            <div className="card">{cardComponents[3]}</div>
          </div>
        </div>
      </div>
      <div>
      <Footer />
    </div>
    </div>
  );
};
export default Home;
