const ZombieFighterListItem = (props) => {
    const {name, price, strength, agility, img} = props;

    return (
        <div id="zombieFighter">
            <img src={img} />
            <p>{name}</p>
            <p>Price: {price}</p>
            <p>Strength: {strength}</p>
            <p>Agility: {agility}</p>
            <button onClick={() => _addFighter(props)}>Add</button>
        </div>
    )
}

export default ZombieFighterListItem;