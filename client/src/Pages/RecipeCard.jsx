import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const RecipeCard = ({ _id, name, imageurl, ingredients, instructions, cookingtime }) => {
  const navigate = useNavigate()
  const handleDelete = async () => {
    try {
      const response = await axios.delete(`http://localhost:9000/api/deleterecipe/${_id}`);
      if (response.data) {
        alert(response.data.msg);
        window.location.reload()
      } else {
        alert("Failed to Delete");
      }
    } catch (error) {
      console.error('Error deleting recipe:', error.message);
      alert('An error occurred while deleting the recipe');
    }
  };

  const handleEdit = () => {
    navigate("/edit-recipe",{ state: { _id, name, imageurl, ingredients, instructions, cookingtime } })
  };

  return (
    <div className="card">
      <div className="img-container">
        <img
          src={imageurl}
          className="card-img-top"
          alt={name}
          style={{ objectFit: 'cover', height: '300px', width: '300px' }}
        />
      </div>
      <div className="card-body">
        <h5 className="card-title"><strong>Name:</strong> {name}</h5>
        <p className="card-text"><strong>Ingredients:</strong> {ingredients}</p>
        <p className="card-text"><strong>Instructions:</strong> {instructions}</p>
        <p className="card-text"><strong>Cooking Time (mins):</strong> {cookingtime}</p>
        <div >
       <button style={{marginRight:10,backgroundColor:"#52D155",color:"white",fontWeight:"bold",padding:6,borderRadius:6,borderWidth:0.5,borderColor:"white"}} onClick={handleEdit}>Edit Recipe</button>
        <button style={{backgroundColor:"red",color:"white",fontWeight:"bold",padding:6,borderRadius:6,borderWidth:0.5,borderColor:"white"}} onClick={handleDelete}>Delete Recipe</button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
