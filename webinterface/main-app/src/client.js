const NAME_ENDPOINT = 'name';
const TEMP_ENDPOINT = 'temp';
const HUMID_ENDPOINT = 'humidity';

const getDomain = () => document.location.href

export const getBoxName = async () => {
    return await fetch(getDomain() + NAME_ENDPOINT)
}

export const getTemp = async () => {
    return await fetch(getDomain() + TEMP_ENDPOINT)
}

export const getHumidity = async () => {
    return await fetch(getDomain() + HUMID_ENDPOINT)
}