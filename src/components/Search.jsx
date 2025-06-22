import React from "react"
export default function Search() {

    const [ingredients, setIngredients] = React.useState([])

    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function handleSubmit(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
        // console.log(ingredients)
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
            {
                ingredients.length > 0 && <section>
                <h2 className="pl-30 pt-10 text-2xl font-bold">Ingredients on hand:</h2>
                <ul aria-live="polite" className="list-disc pl-40 pt-10">{ingredientsListItems}</ul>
                
                {ingredients.length > 3 &&
                    <div className="bg-[#F0EFEB] p-8 mt-10 flex justify-between rounded-2xl">
                    <div className="ml-10">
                        <h3 className="text-lg">Ready for a recipe?</h3>
                        <p className="text-[#6B7280] ">Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button className="bg-[#D17557] p-4 mr-10 rounded-lg text-[#FAFAF8]">Get a recipe</button>
                </div>}
                </section>
            }
            
        </section>
    </>
}