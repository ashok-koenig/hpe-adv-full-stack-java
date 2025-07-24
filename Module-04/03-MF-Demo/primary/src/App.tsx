import ReactDOM from "react-dom/client";

import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => (
  <div className="container">
    <Header />
    <hr/>
    <div>Name: primary</div>
    <div>Framework: react-19</div>
    <hr/>
    <Footer />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);