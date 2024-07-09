import { useState, useEffect } from 'react';
import './App.css';
import * as starshipService from './services/starshipService';
import StarshipSearch from './components/StarshipSearch';
import StarshipList from './components/StarshipList';

function App() {
    const [starships, setStarships] = useState([]);

    const fetchData = async (starship) => {
        const data = await starshipService.searchForStarship(starship);
        const starshipData = data.results.map((starship) => ({
            name: starship.name,
            class: starship.starship_class,
            manufacturer: starship.manufacturer,
            model: starship.model,
        }));
        setStarships(starshipData);
    }

    const fetchDefaultData = async () => {
        const data = await starshipService.index();
        const starshipData = data.results.map((starship) => ({
            name: starship.name,
            class: starship.starship_class,
            manufacturer: starship.manufacturer,
            model: starship.model,
        }));
        setStarships(starshipData);
    }

    useEffect(() => {
        fetchDefaultData();
    }, []);

    return (
        <>
            <h1>Star Wars API</h1>
            <StarshipSearch onSubmit={fetchData}/>
            <StarshipList starships={starships}/>
        </>
    )
}

export default App;
