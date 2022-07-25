import axios from 'axios';

const url = 'http://localhost:8082/ccu-tracker';

export const fetchMacamo = async () => {

  try {
    const { data: { data_disponivel } } = await axios.get(`${url}/Macamo`);
    console.log("Macamo from API:", data_disponivel);
    return { data_disponivel };
  } catch (error) {
    return error;
  }
};

export const fetchCentral = async () => {
  try {
    const { data: { data_disponivel } } = await axios.get(`${url}/Central`);
    console.log("Central from API:", data_disponivel);
    return { data_disponivel };
  } catch (error) {
    return error;
  }
};

 export const  fetchMavalane  = async () => {
  try {
    const { data: { data_disponivel } } = await axios.get(`${url}/Mavalane`);
    console.log("Mavalane from API:", data_disponivel);
    return { data_disponivel };
  } catch (error) {
    return error;
  }
};
