import { useState, useEffect } from 'react';
import * as trackService from '../services/trackService';

// import components
import TrackList from './TrackList';

const Dashboard = () => {
    const [trackList, setTrackList] = useState([]);

    useEffect(() => {
        const fetchTracks = async () => {
            try {
                const tracks = await trackService.index();
                if (tracks.message) {
                    throw new Error(tracks.message);
                }
                setTrackList(tracks);
            } catch (error) {
                console.error(error);
            }
        }

        fetchTracks();
    }, []);

    const handleAddTrack = async (trackData) => {
        try {
            const track = await trackService.create(trackData);
            setTrackList([...trackList, track]);

            if (track.message) {
                throw new Error(track.message);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <TrackList
                tracks={trackList}
                addTrack={handleAddTrack}
                setTrackList={setTrackList}
            />
            <p>Add Track Form coming soon</p>
            <p>Now Playing coming soon</p>
        </>
    )

}

export default Dashboard;