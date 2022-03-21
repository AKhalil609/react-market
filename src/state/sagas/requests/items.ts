import axios from 'axios';

export const GetItems = () => {
    return axios.request({
        method: 'get',
        url: 'https://my-json-server.typicode.com/AKhalil609/demo/items'
    });
};
