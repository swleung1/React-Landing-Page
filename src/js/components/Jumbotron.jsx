import React from "react";

const Jumbotron = () => {
  return (
    <div className="bg-gray-300 p-5 mb-5 rounded">
      <div className="bg-secondary p-5 container">
        <h1 className="text-6xl font-light text-gray-800 mb-6">
          A Warm Welcome!
        </h1>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam,
          eligendi, in quo sunt possimus non incidunt odit vero aliquid
          similique quaerat nam nobis illo aspernatur vitae fugiat numquam
          repellat.
        </p>
        <a className="btn btn-primary btn-lg" href="#" role="button">
          Call to action!
        </a>
      </div>
    </div>
  );
};

export default Jumbotron;
