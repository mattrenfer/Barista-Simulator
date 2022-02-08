import * as axios from 'axios';

const getCustomers = async function () {
  const response = await axios.get('api/customers.json');
  const customers = response.data.map(c => {
    return c;
  })
  return customers;
}

export const data = {
  getCustomers,
};
