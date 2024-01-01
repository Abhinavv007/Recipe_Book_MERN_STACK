import React, { useEffect, useState } from 'react';
import axios from 'axios';

import RecipeCard from './RecipeCard';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const recipe = await axios.get("http://localhost:9000/api/getrecipes");
        setData(recipe.data.msg);
      } catch (error) {
        alert("Recipe data fetching failed");
      }
    };

    getRecipes();
  }, []); 

  return (
    <div>
      
      <h1 style={{ textAlign: "center", marginTop: 10 }}>Recipe Book</h1>
      {data.length === 0 ? (
        <h3  style={{ textAlign: "center", marginTop:40 }}>Create your first recipe😋</h3>
      ) : (
        data && data.map((item) => (
          <RecipeCard key={item._id} {...item} />
        ))
      )}
    </div>
  );
}

export default Home;
