import { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { data } from './utils/constants';
import { getTemperatureDescription } from './lib/temperature';
import { processData } from './lib/api-data';

function App() {
  const [items, setItems] = useState({});

  useEffect(() => {
    const request = () =>
      data.forEach((product) => {
        processData(product, setItems);
      });

    setInterval(request, 5000);

    request();
  }, []);

  return (
    <div className="App container-fluid">
      <h1 className="display-4">Beers</h1>
      <table className="table table-hover" size="sm">
        <thead className="table-dark">
          <tr>
            <th align="left">Name</th>
            <th align="left">Temperature</th>
            <th align="left">Status</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(items).map((itemKey) => (
            <tr key={items[itemKey].id}>
              <td className="col-4">{items[itemKey].name}</td>
              <td className="col-4">{items[itemKey].temperature}</td>
              <td className="col-4">{getTemperatureDescription(items[itemKey])}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
