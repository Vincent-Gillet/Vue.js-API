import axios from 'axios';

export default {
  getProducts() {
    return axios.get('http://localhost:8888/api/v1/products')
      .then(response => response.data)
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  },
};