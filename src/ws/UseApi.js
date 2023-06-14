import axios from 'axios';

const UseApi = async (url) => {
  try {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: url,
        headers: { }
    };
    const data = await axios.request(config);
    console.log(data.status);
    return [];
  } catch (error) {
    console.error(error);
    throw new Error('Error fetching data from API');
  }
};

export default UseApi;
