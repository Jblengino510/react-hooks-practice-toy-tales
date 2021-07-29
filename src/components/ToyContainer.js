import React, { useState, useEffect } from "react";
import ToyCard from "./ToyCard";


function ToyContainer({ toyArr }) {
  
  const toyCards = toyArr.map(toy => (
    <ToyCard key={toy.id} toy={toy}/>
  ))


  return (
    <div id="toy-collection">{toyCards}</div>
  );
}

export default ToyContainer;
