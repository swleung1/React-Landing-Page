import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

const Home = () => {
  const cards = [
    {
      title: "Card One",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, voluptatibus?",
    },
    {
      title: "Card Two",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, voluptatibus?",
    },
    {
      title: "Card Three",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, voluptatibus?",
    },
    {
      title: "Card Four",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, voluptatibus?",
    },
  ];

  return (
    <>
      <Navbar />
      <main>
        <Jumbotron />
        <div className="container mb-5">
          <div className="row">
            {cards.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                text={card.text}
                imageUrl={card.imageUrl}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
