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

	  <div className="container-fluid g-0">
    
    	<Navbar />
      <Jumbotron />
      <div className="row justify-content-around">
        <div className="col-lg-3 col-md-6 mb-4">
        {cardComponents[0]}
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
        {cardComponents[1]}
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
        {cardComponents[2]}
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
        {cardComponents[3]}
        </div>
		  </div>
		  <Footer />
   </div>

	);
  };


export default Home;
