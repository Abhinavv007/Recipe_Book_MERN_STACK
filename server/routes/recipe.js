import express from "express"
import recipeModel from "../model/recipeModel.js"
const router = express.Router()

router.get("/getrecipes",async(req,resp)=>{
 
 try {
    const recipe = await recipeModel.find({})
    if(recipe){
     resp.json({msg:recipe})
    } else{
        resp.json({msg:"Create your first recipe!"})
    }
    
 } catch (error) {
    resp.json({msg:error})

 }
})

router.post("/addrecipe",async(req,resp)=>{
    const { name,imageurl,ingredients,instructions,cookingtime} = req.body

    try {
        if(name&&imageurl&&ingredients&&instructions&&cookingtime){
            const recipe = new recipeModel({name,imageurl,ingredients,instructions,cookingtime})
            const result =  await recipe.save()
            resp.json({msg:"Added Successfully"})
        } else{
            resp.json({msg:"Please fill all the fields"})

        }
        
    } catch (error) {
        resp.json({msg:error})
        
    }
})

router.put("/editrecipe/:id",async(req,resp)=>{
  const {id} = req.params
  const { name,imageurl,ingredients,instructions,cookingtime} = req.body
  try {
    const edit = await recipeModel.findByIdAndUpdate(id,{ name,imageurl,ingredients,instructions,cookingtime}
        ,{new:true}
        )
        const result = await edit.save()
        resp.json({msg:"Recipe saved Successfully"})
  } catch (error) {
    resp.json({msg:error})
    
  }

})
router.delete("/deleterecipe/:id",async(req,resp)=>{
  const {id} = req.params
  try {
    const result = await recipeModel.findByIdAndDelete(id)
    if(result){
      resp.json({msg:"Deleted Successfully"})
    } else{
      resp.json({msg:"Failed to delete"})
    }
  } catch (error) {
    resp.json({msg:error})
  }

})
export default router