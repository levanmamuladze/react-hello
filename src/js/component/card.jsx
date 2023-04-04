import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";

const Card = () => {
    return (
      <div className="card">
        <img src={rigoImage} className="card-img" alt="..."  />
        <div className="card-body">
          <h5 className="card-title text-center">Card title</h5>
          <p className="card-text text-center">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <div class="card-footer text-center text-body-secondary">
            <a href="#" className="btn btn-primary">
              Find out more
            </a>
          </div>
      </div>
    );
  };

export default Card;
