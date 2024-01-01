import {BrowserRouter,Route,Routes } from "react-router-dom"
import './App.css';
import Home from "./Pages/Home";
import Navigbar from "./Pages/Navigbar";
import CreateRecipe from "./Pages/CreateRecipe";
import EditRecipe from "./Pages/EditRecipe";

function App() {
  return (
   <>
   <BrowserRouter>
   <Navigbar />
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/nav" element={<Navigbar />} />
    <Route path="/create-recipe" element={<CreateRecipe />} />
    <Route path="/edit-recipe" element={<EditRecipe />} />
 

   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
