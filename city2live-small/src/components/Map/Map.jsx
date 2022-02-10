import React, { useState } from 'react';
import {
    GoogleMap,
    useLoadScript,
    LoadScript,
    Marker,
    InfoWindow,
} from '@react-google-maps/api';

import Spiderfy from '../Spiderfy/Spiderfy';
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
    const [map, setMap] = React.useState(null);
    const onUnmount = React.useCallback(function callback(map) {
        setMap(null);
    }, []);

    const [markerClicked, setMarkerClicked] = useState(null);
    /*
    const { isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    });

    if (loadError) return 'Error loading maps';
    if (!isLoaded) return 'Loading Maps';
    */
    return (
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={12}
                center={center}
                options={options}
                onUnmount={onUnmount}
            >
                <Spiderfy>
                    {devices?.map((device, i) => (
                        <Marker
                            key={i}
                            position={{
                                lat: device.location.value.coordinates[1],
                                lng: device.location.value.coordinates[0],
                            }}
                            icon={{
                                url: '/environementWeatherSensor.png',
                                anchor: new window.google.maps.Point(15, 0),
                            }}
                            onClick={() => {
                                setMarkerClicked(device);
                            }}
                            title={device.id}
                        />
                    ))}
                </Spiderfy>

                {markerClicked ? (
                    <InfoWindow 
                        position={{
                            lat: markerClicked.location.value.coordinates[1],
                            lng: markerClicked.location.value.coordinates[0],
                        }}
                        onCloseClick={() => {
                            setMarkerClicked(null);
                        }}
                    >
                        <div>
                            marker here 
                        </div>
                    </InfoWindow>) : null
                }
            </GoogleMap>
        </LoadScript>
    );
}

export default Map;