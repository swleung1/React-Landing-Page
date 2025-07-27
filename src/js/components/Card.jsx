import React from "react";

const imageUrl = "https://picsum.photos/500/325";

const Card = ({ title, text }) => {
  return (
    <div className="col-md-3 d-flex">
      <div className="card mb-4 w-100">
        <img src={imageUrl} className="card-img-top" alt={title} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          <div className="mt-auto">
            <a href="#" className="btn btn-primary w-100">
              Find out more!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
