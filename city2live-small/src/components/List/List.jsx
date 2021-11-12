import React, { useState } from 'react';
import { CircularProgress, FormControl, Grid, InputLabel, MenuItem, Typography, Select } from '@material-ui/core';

import DeviceDetails from '../DeviceDetails/DeviceDetails';
import useStyles from './styles';

function List({ devices }) {
    const classes = useStyles();
    const [type, setType] = useState('environment');

    console.log(devices);

    return (
        <div className={classes.container}>
            <Typography variant="h4">Συσκευές</Typography>
            <FormControl className={classes.formControl}>
                <InputLabel>Τύπος</InputLabel>
                <Select value={type} onChange={(e) => setType(e.target.value)}>
                    <MenuItem value="environment">Περιβαλλοντικές</MenuItem>
                </Select>
            </FormControl>
            <Grid container spacing={3} className={classes.list}>
                {devices?.map((device, i) => (
                    <Grid item key={i} xs={12}>
                        <DeviceDetails device={device} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default List;