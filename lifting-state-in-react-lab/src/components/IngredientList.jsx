const IngredientList = (props) => {

    const {ingredients, addIngredient } = props;

    const _handleAddIngredient = (ingredient) => {
        addIngredient(ingredient);
    }

    return <ul>
        {ingredients.map((ingredient, index) => (
            <li style={{backgroundColor: ingredient.color}} key={index}>
                {ingredient.name}
                <button onClick={() => _handleAddIngredient(ingredient)}>+</button>
            </li>
        ))}
    </ul>;
};

export default IngredientList;