import axios from 'axios';

const UseApi = async (url,method='get') => {
  try {
    let config = {
        method: method,
        url: url,
        headers: {
          'Content-Type':'application/json'
        }
    };
    const response = await axios.request(config);
    const data = await response.data
    return data;
  } catch (error) {
    console.error(error);
    throw new Error('Error fetching data from API');
  }
};

export default UseApi;
