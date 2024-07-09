import StarshipCard from "./StarshipCard";

const StarshipList = ({starships}) => {
    return (
        <section>
            <h2>Starships</h2>
            <p>Number of results: {starships.length}</p>
            <StarshipCard starships={starships} />
        </section>
    )
}

export default StarshipList;