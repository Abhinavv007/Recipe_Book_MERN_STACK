import mongoose from "mongoose";
const recipeSchema = mongoose.Schema({
    name:String,
    imageurl:String,
    ingredients:String,
    instructions:String,
    cookingtime:Number
})
const recipeModel = new mongoose.model("recipe",recipeSchema)
export default recipeModel