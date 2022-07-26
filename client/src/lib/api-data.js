import { apiBaseURL, endpointTemperature } from '../utils/config';

export function processData(product, setItemsFunc) {
  return fetch(apiBaseURL + endpointTemperature + `${product.id}`)
    .then((response) => response.json())
    .then((response) => {
      console.log(response)
      setItemsFunc((prevItems) => ({
        ...prevItems,
        [product.id]: {
          ...product,
          ...response,
        },
      }))
    }
    );
};