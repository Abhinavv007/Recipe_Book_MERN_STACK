import React, { useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function EditRecipe() {
  const navigate = useNavigate()
  const location = useLocation();
  const { _id, name, imageurl, ingredients, instructions, cookingtime } = location.state;

  const [input, setInput] = useState({
    name,
    imageurl,
    ingredients,
    instructions,
    cookingtime,
  });

  const fetchData = async (e) => {
    e.preventDefault()
    const result = await axios.put(`http://localhost:9000/api/editrecipe/${_id}`, input);
    if (result) {
      navigate("/")
      alert(result.data.msg);
    } else {
      alert('Some error while saving the recipe');
    }
  };

  return (
    <div>
      <div className="mx-3">
        <Form onSubmit={fetchData}>
          <h2 className='text-center'>Edit {name} Recipe</h2>
          <Form.Group controlId="name">
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
              className="mb-3" 
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
          <Button variant="primary" type="submit">
            Save Recipe
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default EditRecipe;
