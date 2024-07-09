import { useState } from 'react';

const StarshipSearch = (props) => {
    const [starship, setStarship] = useState('');

    const _handleSubmit = (event) => {
        event.preventDefault();
        console.log(props);
        props.onSubmit(starship);
        setStarship('');
    }

    const _handleChange = (event) => {
        setStarship(event.target.value);
    }

    return (
        <section>
            <h3>Search</h3>
            <form onSubmit={_handleSubmit}>
                <label>
                    Search Term:
                    <input
                        type="search"
                        required
                        autoFocus
                        onChange={_handleChange}
                        value={starship}
                    />
                </label>
                <button>Search</button>
            </form>
        </section>
    )
};

export default StarshipSearch;