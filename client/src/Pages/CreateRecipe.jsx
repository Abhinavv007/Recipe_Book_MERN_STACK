import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';


function CreateRecipe() {
  const [input, setInput] = useState({
    name: '',
    imageurl: '',
    ingredients: '',
    instructions: '',
    cookingtime: '',
  });
const navigate = useNavigate()
  const fetchData = async (e) => {
    e.preventDefault()
    const result = await axios.post('http://localhost:9000/api/addrecipe', input);
    if (result) {
        
      alert(result.data.msg);
      if(result.data.msg==="Added Successfully"){
        navigate("/")
      } else{
        alert("Try again")
      }
      
      
    } else {
      alert('Some error while saving the recipe');
    }
  };

  return (
    <div>
      <div className="mx-3">
        <Form onSubmit={fetchData}>
          <h2 style={{marginTop:10}} className='text-center'>Create Recipe</h2>
          <Form.Group  controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={input.name}
              onChange={(e) => setInput({ ...input, name: e.target.value })}
              className="mb-3" 
            />
          </Form.Group>
          <Form.Group controlId="imageurl">
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              type="text"
              value={input.imageurl}
              onChange={(e) => setInput({ ...input, imageurl: e.target.value })}
              className="mb-3" 
            />
          </Form.Group>
          <Form.Group controlId="ingredients">
            <Form.Label>Ingredients</Form.Label>
            <Form.Control
              type="text"
              value={input.ingredients}
              onChange={(e) => setInput({ ...input, ingredients: e.target.value })}
              className="mb-3" // Margin bottom
            />
          </Form.Group>
          <Form.Group controlId="instructions">
            <Form.Label>Instructions</Form.Label>
            <Form.Control
              type="text"
              value={input.instructions}
              onChange={(e) => setInput({ ...input, instructions: e.target.value })}
              className="mb-3" 
            />
          </Form.Group>
          <Form.Group controlId="cookingtime">
            <Form.Label>Cooking Time (minutes)</Form.Label>
            <Form.Control
              type="number"
              value={input.cookingtime}
              onChange={(e) => setInput({ ...input, cookingtime: e.target.value })}
              className="mb-3" 
            />
          </Form.Group>
          <Button style={{marginBottom:10}} variant="primary" type="submit">
            Create Recipe
          </Button>
        </Form>
        
      </div>
    </div>
  );
}

export default CreateRecipe;
