export default function Search() {
    return<>
        <section>
            <form className="flex justify-center mt-15">
                <input className="border-1 border-[#D1D5DB] p-3 w-135 rounded-lg mr-3"
                    type="text"
                    id="ingredients"
                    name="ingredients"
                    placeholder="e.g. oregano"
                    />
                <button
                className="bg-black text-white p-3 rounded-lg"
                >
                    + Add ingredient
                </button>
            </form>
        </section>
    </>
}