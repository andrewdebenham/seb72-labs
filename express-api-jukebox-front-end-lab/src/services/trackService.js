const BASE_URL = import.meta.env.VITE_BACK_END_SERVER_URL;

const index = async () => {
    try {
        const response = await fetch(BASE_URL);
        return response.json();
    } catch (error) {
        console.error(error);
    }
};

const create = async (track) => {
    try {
        const response = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(track)
        });
        return response.json();
    } catch (error) {
        console.error(error);
    }
};

const deleteTrack = async (id) => {
    try {
        const response = await fetch(BASE_URL + '/' + id, {
            method: 'DELETE'
        });
        return response.json();
    } catch (error) {
        console.error(error);
    }
};

export { index, create, deleteTrack };