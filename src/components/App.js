import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

const toyUrl = "http://localhost:3001/toys"


function App() {
  const [showForm, setShowForm] = useState(false);
  const [ toyArr, setToyArr] = useState([])

  useEffect(() => {
    fetch(toyUrl)
    .then(res => res.json())
    .then(setToyArr)
  }, [])

  console.log(toyArr)

  function handleAddToy(newToy){
    const newToyArr = [...toyArr, newToy]
    setToyArr(newToyArr)
  }

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddToy={handleAddToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toyArr={toyArr}/>
    </>
  );
}

export default App;
