import axios from 'axios';

const event = new Date();
const URL = '/temporal/entities/';
const typeList = ['Environmental-Device', 'Test-Device'];

const options = {
    params: {
        'type': typeList.toString(),
        'timerel': 'before',
        'timeAt': event.toISOString(),
        'lastN': '1'
    },
    headers: {
        'NGSILD-Tenant': 'openiot',
        'NGSILD-Path': '/',
        'Accept': 'application/ld+json'
    }
};

export const getDevicesData = async () => {
    try {
        const { data } = await axios.get(URL, options);

        return data;
    } catch (error) {
        console.log(error)
    }
};