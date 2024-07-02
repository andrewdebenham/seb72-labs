import { useState } from 'react';
import './App.css';

const App = () => {

    const [team, setTeam] = useState([]);
    const [money, setMoney] = useState(100);
    const [totalStrength, setTotalStrength] = useState(0);
    const [totalAgility, setTotalAgility] = useState(0);
    const [zombieFighters, setZombieFighters] = useState([
        {
            name: 'Survivor',
            price: 12,
            strength: 6,
            agility: 4,
            img: 'https://via.placeholder.com/150/92c952',
        },
        {
            name: 'Scavenger',
            price: 10,
            strength: 5,
            agility: 5,
            img: 'https://via.placeholder.com/150/771796',
        },
        {
            name: 'Shadow',
            price: 18,
            strength: 7,
            agility: 8,
            img: 'https://via.placeholder.com/150/24f355',
        },
        {
            name: 'Tracker',
            price: 14,
            strength: 7,
            agility: 6,
            img: 'https://via.placeholder.com/150/d32776',
        },
        {
            name: 'Sharpshooter',
            price: 20,
            strength: 6,
            agility: 8,
            img: 'https://via.placeholder.com/150/1ee8a4',
        },
        {
            name: 'Medic',
            price: 15,
            strength: 5,
            agility: 7,
            img: 'https://via.placeholder.com/150/66b7d2',
        },
        {
            name: 'Engineer',
            price: 16,
            strength: 6,
            agility: 5,
            img: 'https://via.placeholder.com/150/56acb2',
        },
        {
            name: 'Brawler',
            price: 11,
            strength: 8,
            agility: 3,
            img: 'https://via.placeholder.com/150/8985dc',
        },
        {
            name: 'Infiltrator',
            price: 17,
            strength: 5,
            agility: 9,
            img: 'https://via.placeholder.com/150/392537',
        },
        {
            name: 'Leader',
            price: 22,
            strength: 7,
            agility: 6,
            img: 'https://via.placeholder.com/150/602b9e',
        },
    ])

    const _addFighter = (fighter) => {
        money < fighter.price ? console.log('Not enough money') : setMoney(money - fighter.price);
        setTeam([...team, fighter]);
        setTotalStrength(totalStrength + fighter.strength);
        setTotalAgility(totalAgility + fighter.agility);
    }

    const _removeFighter = (fighter) => {
        setMoney(money + fighter.price);
        setTeam(team.filter(teamFighter => teamFighter !== fighter));
        setTotalStrength(totalStrength - fighter.strength);
        setTotalAgility(totalAgility - fighter.agility);
    }

    return (
        <>
            <h1>Zombie Fighters</h1>

            <h3>Money: {money}</h3>

            <h3>Team Strength: {totalStrength}</h3>

            <h3>Team Agility: {totalAgility}</h3>

            <h3>Team</h3>
            <div id="teamFighters">
                <p>{team.length === 0 ? 'Add some team members' : ''}</p>
                {team.map((fighter, index) => (
                    <div id="teamFighter" key={index}>
                        <img src={fighter.img} />
                        <p>{fighter.name}</p>
                        <p>Price: {fighter.price}</p>
                        <p>Strength: {fighter.strength}</p>
                        <p>Agility: {fighter.agility}</p>
                        <button onClick={() => _removeFighter(fighter)}>Remove</button>
                    </div>
                ))}
            </div>

            <h3>Fighters</h3>
            <div id="zombieFighters">
            {zombieFighters.map((fighter, index) => (
                <div id="zombieFighter" key={index}>
                    <img src={fighter.img} />
                    <p>{fighter.name}</p>
                    <p>Price: {fighter.price}</p>
                    <p>Strength: {fighter.strength}</p>
                    <p>Agility: {fighter.agility}</p>
                    <button onClick={() => _addFighter(fighter)}>Add</button>
                </div>
            ))}
            </div>
        </>
    );
}

export default App