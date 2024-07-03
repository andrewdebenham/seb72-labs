const BurgerStack = (props) => {

    const {stack, removeIngredient } = props;

const _handleRemoveIngredient = (ingredient) => {
    removeIngredient(ingredient);
}

    return <ul>
        {stack.map((ingredient, index) => (
            <li style={{backgroundColor: ingredient.color}} key={index}>
            {ingredient.name}
            <button onClick={() => _handleRemoveIngredient(ingredient)}>-</button>
        </li>
        ))}
    </ul>;
};

export default BurgerStack;