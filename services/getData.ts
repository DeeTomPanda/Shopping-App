import axios from 'axios';

const fetchData = () => {
  return new Promise((res, rej) => {
    axios
      .get('https://dummyjson.com/products')
      .then(response => {
        res(response);
      })
      .catch(err => rej(err));
  });
};
export default fetchData;
