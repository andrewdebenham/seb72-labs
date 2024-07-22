import { useState } from 'react';

const TrackForm = (props) => {
    const initialState = {
        title: '',
        artist: ''
    };

    const [formData, setFormData] = useState(initialState); // add props.selectedTrack || initialState

    const _handleTitleChange = (event) => {
        const updatedFormData = {...formData, title: event.target.value};
        setFormData(updatedFormData);
    }
    
    const _handleArtistChange = (event) => {
        const updatedFormData = {...formData, artist: event.target.value};
        setFormData(updatedFormData);
    }

    const _handleSubmit = (event) => {
        event.preventDefault();
        props.handleSubmit(formData);
        setFormData(initialState);
        props.toggleShowForm();
    }

    return (
        <div>
            <form onSubmit={ _handleSubmit }>
                <label>
                    Title:
                    <input
                        value={ formData.title }
                        onChange={ _handleTitleChange }
                        required
                    />
                </label>
                <label>
                    Artist:
                    <input
                        value={ formData.artist }
                        onChange={ _handleArtistChange }
                        required
                    />
                </label>
                <button>{ props.selectedTrack ? 'Update track' : 'Add new track' }</button>
            </form>
        </div>
    );
};

export default TrackForm;