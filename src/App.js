import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import store from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <Home />
      </div>
    </Provider>
  );
}

export default App;
