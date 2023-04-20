import ReactDOM from 'react-dom/client';
import React, { useState, useEffect } from 'react';
import SplashScreen from "./PApp/SplashScreen";
import PApp from './PApp/PApp';
import DResume from './PApp/DResume';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
    const [isReady, setIsReady] = useState(false);
  
    useEffect(() => {
      // Simulate an asynchronous initialization process
      setTimeout(() => {
        setIsReady(true);
      }, 3000);
    }, []);
  
    return (
      <div>
        {!isReady ? (
          <SplashScreen />
        ) : (
            <PApp/>
        )}
      </div>
    );
  };
  
  export default App;
  class Index extends React.Component{
    render(){
      return (
        <>
          <BrowserRouter>
          <Routes>
              <Route path="/" element={<App />}/>
              <Route path="DResume" element={<DResume/>} />
          </Routes>
        </BrowserRouter>
        </>
      );
  }
  }
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Index />);