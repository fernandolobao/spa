import React from 'react';
import { Provider } from './Context/Provider';
import { Dashboard } from './Pages';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider>
      <div className="App">
        <Dashboard />
      </div>
    </Provider>
  );
}

export default App;
