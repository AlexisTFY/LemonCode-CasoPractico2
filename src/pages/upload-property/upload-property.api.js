import Axios from 'axios';

const saleTypeListUrl = `${process.env.BASE_API_URL}/saleTypes`;

export const getSalesTypeList = () => Axios.get(saleTypeListUrl).then(response => response.data);

const saleProvinceListUrl = `${process.env.BASE_API_URL}/provinces`;

export const getProvinceTypeList = () => Axios.get(saleProvinceListUrl).then(response => response.data);

const equipmentstUrl = `${process.env.BASE_API_URL}/equipments`;

export const getEquipments = () => Axios.get(equipmentstUrl).then(response => response.data);

const urlProperty = `${process.env.BASE_API_URL}/properties`;

export const insertProperty = property => Axios.post(`${urlProperty}/${property.id}`, property).then(response => {
    return response.data;
});