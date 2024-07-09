// define function that can get the SWAPI data
// needs the base URL defined 'endpoint'
// no api key in this case
    // if api key needed -> append to base URL

const BASE_URL = "https://swapi.dev/api/starships/";

const index = async () => {
    try {
        const response = await fetch(BASE_URL);
        return response.json();
    } catch (error) {
        console.error(error);
    }
};

const searchForStarship = async (starship) => {
    try {
        const queryString = `?search=${starship}`;
        console.log('Querying ', BASE_URL + queryString);
        const response = await fetch(BASE_URL + queryString);
        const data = await response.json();
        console.log('Data: ', data);
        return data;
    } catch (error) {
        console.log(error);
    }
};

export { index, searchForStarship };