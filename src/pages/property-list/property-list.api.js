import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/properties`;

export const getPropertyList = queryParams => Axios.get(`${url}?${queryParams}`).then(response => {
    return response.data;
});

const saleTypeListUrl = `${process.env.BASE_API_URL}/saleTypes`;

export const getSalesTypeList = () => Axios.get(saleTypeListUrl).then(response => {
    return response.data;
});

const saleProvinceListUrl = `${process.env.BASE_API_URL}/provinces`;

export const getProvinceTypeList = () => Axios.get(saleProvinceListUrl).then(response => {
    return response.data;
});