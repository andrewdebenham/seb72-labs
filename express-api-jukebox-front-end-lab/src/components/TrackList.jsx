import { useState } from 'react';

import * as trackService from '../services/trackService';
import TrackForm from './TrackForm';

const TrackList = (props) => {
    const [showForm, setShowForm] = useState(false);

    const _handleDelete = async (id) => {
        try {
            await trackService.deleteTrack(id);
            const updatedTrackList = props.tracks.filter((track) => track._id !== id);
            props.setTrackList(updatedTrackList);
        } catch (error) {
            console.error(error);
        }
    } 

    const trackListItems = props.tracks.map((track, index) => (
        <li key={index} className="trackListItem">
            <p>{track.title} - {track.artist}</p>
            <button>Play</button>
            <button>Edit</button>
            <button onClick={() => _handleDelete(track._id)}>Delete</button>
        </li>
    ));

    const toggleShowForm = (track) => {
        setShowForm(!showForm);
    }

    const _handleFormClick = () => {
        // update (forget) selected pet
        toggleShowForm(); // show or hide form
    }


    return (
        <div>
            <button onClick={_handleFormClick}>
                { showForm ? 'Close Form' : 'Add Track' }
            </button>
            { showForm && <TrackForm selectedTrack={false} handleSubmit={props.addTrack} toggleShowForm={toggleShowForm}/> }
            <h1>Track List</h1>
            { props.tracks.length == 0 ? <h3>No tracks yet</h3> : <ul>{trackListItems}</ul> }
        </div>
    )
};

export default TrackList;