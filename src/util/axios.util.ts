import Axios from 'axios';

export const AxiosClient = Axios.create({baseURL: `https://dog.ceo/api`});
