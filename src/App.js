import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Website from './Pages/Website';
import Portfolio from "./Pages/Portfolio";
import About from './Pages/About';
import Main from "./Components/Main";
import Contact from "./Pages/Contact";
import Footer from './Components/Footer';
import Services from "./Pages/Services"

function App() {
  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element= {<Website/>}/>
    <Route path="/portfolio" element={<Portfolio/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/services" element={<Services/>}/>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
