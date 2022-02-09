import * as axios from 'axios';

const getCustomers = async function () {
  const response = await axios.get('api/customers.json');
  const customers = response.data.map(c => {
    return c;
  })
  return customers;
}

const getDrinks = async function () {
  const response = await axios.get('api/drinks.json');
  const drinks = response.data.map(d => {
    return d;
  })
  return drinks;
}

export const data = {
  getCustomers,
  getDrinks,
};
