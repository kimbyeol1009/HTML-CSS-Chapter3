import './App.css';
import Header from "./assets/header";
import Main from "./assets/main";
import Footer from "./assets/footer";
import Gmail from "./assets/gmail";
import Image from "./assets/image";


import {Link, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Link to="/"></Link>

      <Routes>
        <Route path="/" element={
          <div>
            <Header/>
            <Main/>
            <Footer/>
          </div>}/>
        <Route path = "/gmail" element={<div className="gmail"><Gmail/></div>}/>
        <Route path = "/images" element={<div className="images"><Image/></div>}/>
      </Routes>
    </div>
  );
}

export default App;
