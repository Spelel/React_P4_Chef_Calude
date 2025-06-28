export default function IngergientsList(props) {

    const ingredientsListItems = props.ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    return <section>
    <h2 className="pl-30 pt-10 text-2xl font-bold">Ingredients on hand:</h2>
    <ul aria-live="polite" className="list-disc pl-40 pt-10">{ingredientsListItems}</ul>
    
    {props.ingredients.length > 3 &&
        <div className="bg-[#F0EFEB] p-8 mt-10 flex justify-between rounded-2xl">
        <div className="ml-10">
            <h3 className="text-lg">Ready for a recipe?</h3>
            <p className="text-[#6B7280] ">Generate a recipe from your list of ingredients.</p>
        </div>
        <button className="bg-[#D17557] p-4 px-6 mr-10 rounded-lg text-[#FAFAF8]" onClick={props.toggle}>Get a recipe</button>
    </div>}
    </section>
}