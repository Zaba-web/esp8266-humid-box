const DOMAIN = 'http://192.168.0.7/';
const NAME_ENDPOINT = 'name';
const TEMP_ENDPOINT = 'temp';
const HUMID_ENDPOINT = 'humidity';

const getDomain = () => DOMAIN

export const getBoxName = async () => {
    return await fetch(getDomain() + NAME_ENDPOINT)
}

export const getTemp = async () => {
    return await fetch(getDomain() + TEMP_ENDPOINT)
}

export const getHumidity = async () => {
    return await fetch(getDomain() + HUMID_ENDPOINT)
}