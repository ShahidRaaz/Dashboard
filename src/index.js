import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Dashboard from './Dashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";

class Index extends React.Component{
  render(){
    return (
      <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}/>
            <Route path="Dashboard" element={<Dashboard />}/>
        </Routes>
      </BrowserRouter>
      </>
     
    );
}
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);
