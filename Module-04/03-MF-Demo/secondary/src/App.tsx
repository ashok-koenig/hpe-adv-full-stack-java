import ReactDOM from "react-dom/client";

import "./index.css";
import React, { Suspense } from "react";

const Header = React.lazy(()=> import('primary/Header'))
const Footer = React.lazy(()=> import('primary/Footer'))

const App = () => (
  <div className="container">
    <Suspense fallback={<p>Loading...</p>}> <Header /></Suspense> 
    <hr/>
    <div>Name: secondary</div>
    <div>Framework: react-19</div>
    <hr />
    <Suspense fallback={<p>Loading...</p>}> <Footer /></Suspense> 
    
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);