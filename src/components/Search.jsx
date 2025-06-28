import React from "react"
import IngergientsList from "./IngredientsList"
import ClaudeRecipe from "./ClaudeRecipe"
export default function Search() {

    const [ingredients, setIngredients] = React.useState(["all the main spices", "pasta", "ground beef", "tomato paste"])

    function handleSubmit(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
        // console.log(ingredients)
    }


    const [recipeShow, setRecipe] = React.useState(false)

    function toggle(){
        setRecipe(prevState => !prevState)
    }
    
    return<>
        <section className="pl-30 pr-30" >
            <form className="flex justify-center mt-15" action={handleSubmit}>
                <input className="border-1 border-[#D1D5DB] p-3 w-135 rounded-lg mr-3"
                    type="text"
                    id="ingredient"
                    name="ingredient"
                    placeholder="e.g. oregano"
                    />
                <button className="bg-black text-white p-3 rounded-lg">
                    + Add ingredient
                </button>
            </form>
            {ingredients.length > 0 && <IngergientsList 
                ingredients={ingredients}
                toggle={toggle}
            />}
                { recipeShow ? <ClaudeRecipe /> : ""}
            
        </section>
    </>
}