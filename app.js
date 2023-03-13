import { animals } from "./animals";

import React from "react";
import ReactDOM from "react-dom";

const title = " ";

const background = (
  <img className="background" src="/images/ocean.jpg" alt="ocean" />
);

const showbackground = true;

const images = [];
for (const animal in animals) {
  images.push(
    <img
      key={animal}
      className="animal"
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role="button"
      onClick={displayFact}
    />
  )
}

function displayFact(e) {
  const selectedAnimal = e.target.alt;
  const animalInfo = animals[selectedAnimal];
  const I = Math.floor(Math.random() * animalInfo.facts.length);
  const funFact = animalInfo.facts[I];
  document.getElementById('fact').innerHTML = funFact;
}
  

const animalFacts = (
  <div>
  <h1>{title === " " ? "Click an animal for a fun fact" : title}</h1>
    {showbackground && background}
    <div className="animals">
    {images}
    </div>
    <p id="fact"></p>
  </div>
);


ReactDOM.render(animalFacts,document.getElementById('root'));





