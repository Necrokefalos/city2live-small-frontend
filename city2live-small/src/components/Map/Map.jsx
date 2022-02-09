import React from 'react';
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow,
} from '@react-google-maps/api';

import mapStyles from './mapStyles';


const mapContainerStyle = {
    width: '100%',
    height: '85vh',
};

const center = {
    lat: 37.983810,
    lng: 23.727539,
};

const options = {
    styles: mapStyles,
};

function Map({ devices }) {
    //const [childClicked, setChildClicked] = useState(null);

    const { isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    });

    if (loadError) return 'Error loading maps';
    if (!isLoaded) return 'Loading Maps';

    return (
        <div>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={12}
                center={center}
                options={options}
            >
                {devices?.map((device, i) => (
                    <Marker
                        key={i}
                        position={{
                            lat: device.location.value.coordinates[1],
                            lng: device.location.value.coordinates[0],
                        }}
                    >
                    </Marker>
                ))}
            </GoogleMap>
        </div>
    );
}

export default Map;