import axios from 'axios';

const request = axios.create({});

export const get = async (path: string, options: object = {}) => {
    const res = await request.get(path, options);
    return res.data;
};

export const post = async (path: string, data: object, headers: object) => {
    const res = await request.post(path, data, headers);
    return res.data;
};

export default request;
