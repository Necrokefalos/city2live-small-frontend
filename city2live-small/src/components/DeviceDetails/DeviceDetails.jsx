import React from 'react';
import { Box, Typography, Button, Card, CardActions, CardContent } from '@material-ui/core';
import { Icon } from '@iconify/react';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import useStyles from './styles';

function DeviceDetails({ device }) {
    const classes = useStyles();
    const controlledAssetList = {
        "building": "fluent:building-24-filled",
    };
    
    return (
        <Card elevation={6}>
            <CardContent>
                <Typography gutterBottom variant="h5">
                    {device.id.split(":").pop()}
                </Typography>
                {device?.temperature && (
                    <Box display="flex" justifyContent="space-between">
                        <Typography variant="subtitle1">
                            <Icon icon="carbon:temperature-celsius" width={24} height={24} /> Θερμoκρασία
                        </Typography>
                        <Typography gutterBottom variant="subtitle1">{device.temperature.value} {device.temperature.unitCode}</Typography>
                    </Box>
                )}
                {device?.wind && (
                    <Box display="flex" justifyContent="space-between">
                        <Typography variant="subtitle1">
                            <Icon icon="lucide:wind" width={24} height={24} /> Ταχύτητα ανέμου
                        </Typography>
                        <Typography gutterBottom variant="subtitle1">{device.wind.value} {device.wind.unitCode.toLowerCase()}</Typography>
                    </Box>
                )}
                {device?.address && (
                    <Box display="flex" justifyContent="space-between">
                        <Typography gutterBottom variant="body2" color="textSecondary" className={classes.subtitle}>
                            <Icon icon="carbon:location-filled" width={24} height={24} />Διεύθηνση
                        </Typography>
                        <Typography gutterBottom variant="body2" color="textSecondary" className={classes.subtitle}>
                            {device.address.value.streetAddress + ", " + device.address.value.addressLocality + ", " + device.address.value.addressRegion}
                        </Typography>
                    </Box>
                )}
            </CardContent>
        </Card>
    );
}

export default DeviceDetails;