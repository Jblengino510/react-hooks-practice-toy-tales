import React, { useState } from "react";

function ToyForm({ onAddToy }) {
  const [ formData, setFormData ] = useState({
    id: "",
    name: "",
    image: "",
    likes: ""
  })

  function handleOnChange(e){
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  function handleOnSubmit(e){
    e.preventDefault()
    
    const newToy = {
      id: formData.id,
      name: formData.name,
      image: formData.image,
      likes: formData.likes
    }
    const config = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newToy)
    }

    fetch("http://localhost:3001/toys", config)
    .then(res => res.json())
    .then((newToy) => {
      onAddToy(newToy)
      setFormData({
        id: "",
        name: "",
        image: "",
        likes: ""
      })
    })
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleOnSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={handleOnChange}
        />
        <br />
        <input
          type="text"
          name="image"
          value={formData.image}
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={handleOnChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
