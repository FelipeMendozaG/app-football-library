import axios from 'axios';

const UseApi = async (url,method='get',parameters={}) => {
  try {
    let config = {
        method: method,
        url: url,
        headers: {
          'Content-Type':'application/json'
        }
    };
    if(method === 'get' && parameters !== {}){
      config = {...config,params:parameters};
    }
    const response = await axios.request(config);
    const data = await response.data;
    return data;
  } catch (error) {
    console.error(error);
    throw new Error('Error fetching data from API');
  }
};

export default UseApi;
