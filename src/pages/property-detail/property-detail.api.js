import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/properties`;
const equipmentstUrl = `${process.env.BASE_API_URL}/equipments`;
const urlContact = `${process.env.BASE_API_URL}/contact`;

export const getProperty = id => Axios.get(url,{params:{id: id}}).then(({data}) => data);

export const getEquipments = () => Axios.get(equipmentstUrl).then(response => response.data);

export const sendContact = contactForm => Axios.post(urlContact, contactForm).then(response => response.data);