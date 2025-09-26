

import { BrowserRouter,Routes,Route } from "react-router-dom";
import "./app.css";

import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Portfolio from "./pages/portfolio/Portfolio";
import Contact from "./pages/contact/Contact";
import Themes from "./components/Themes";
import Admin from "./pages/Admin/Admin";
import ProjectDetails from "./pages/projectDetails/ProjectDetails";
import ScrollToHashElement from "./components/ScrollToHashElement";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Themes />
      <ScrollToHashElement />
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="portfolio" element={<Portfolio />}></Route>
          <Route path="portfolio/:projectName" element={<ProjectDetails />} />
        <Route path="contact" element={<Contact />}></Route>
        <Route path="admin" element={<Admin />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
