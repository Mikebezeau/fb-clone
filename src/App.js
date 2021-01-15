import React from 'react';
import './App.css';
import Login from './components/Login';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Widget from './components/Widget';
import { useStateValue } from './state/StateProvider';

function App() {

  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      { !user ? (
          <Login/>
        ) : (
          <>
            <Header/>
            <div className="app_body">
              <Sidebar/>
              <Feed/>
              <Widget/>
            </div>
          </>
        )
      }
    </div>
  );
}

export default App;
