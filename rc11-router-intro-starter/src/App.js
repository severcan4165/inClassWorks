import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Instructors from "./pages/Instructors";
import NotFound from "./pages/NotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Nav />
        <Routes> 
          <Route path="/" element = {<Home/>} />
          <Route path="/Contact" element = {<Contact/>} />
          <Route path="/Instructors" element = {<Instructors/>} />
          <Route path="/*" element = {<NotFound/>} />
        </Routes>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
