const StarshipCard = ({starships}) => {
    const starshipListItems = starships.map((starship, index) => (
        <li key={index}>
            <p><strong>{starship.name}</strong></p>
            <p>Class: {starship.class}</p>
            <p>Manufacturer: {starship.manufacturer}</p>
            <p>Model: {starship.model}</p>
        </li>
    ));

    return (
        <ul>
            {starshipListItems}
        </ul>
    )
};

export default StarshipCard;