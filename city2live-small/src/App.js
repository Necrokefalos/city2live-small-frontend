import React, { useEffect, useState } from 'react';
import { CssBaseline, Grid } from '@material-ui/core';

import { getDevicesData } from './api'
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';

function App() {
    const [devices, setDevices] = useState([]);

    useEffect(() => {
        getDevicesData()
            .then((data) => {
                //console.log(data);
                setDevices(data);
            })
    }, []);

    return (
        <>
            <CssBaseline />
            <Header />
            <Grid container spacing={3} style={{ width: '100%' }}>
                <Grid item xs={12} md={4}>
                    <List devices={devices} />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map devices={devices} />
                </Grid >
            </Grid>
        </>
    );
}

export default App;