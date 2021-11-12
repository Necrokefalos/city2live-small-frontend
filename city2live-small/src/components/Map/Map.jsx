import React from 'react';
import GoogleMapReact from 'google-map-react';
//import { Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';

import useStyles from './styles';
import mapStyles from './mapStyles';

function Map({ devices }) {
    const classes = useStyles();
    //const isDesktop = useMediaQuery('(min-width:600px)');

    const coordinates = {
        lat: 37.983810,
        lng: 23.727539
    };

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact 
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={12}
                margin={[50, 50, 50, 50]}
                options={{ styles: mapStyles }}
            >
                {devices?.map((device, i) => (
                    <div
                        className={classes.markerContainer}
                        lat={device.location.value.coordinates[1]}
                        lng={device.location.value.coordinates[0]}
                        key={i}
                    >
                        <LocationOnOutlinedIcon fontSize="large" />
                    </div>
                ))}
            </GoogleMapReact>
        </div>
    );
}

export default Map;