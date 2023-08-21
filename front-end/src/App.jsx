import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import "./assets/style/style.scss";
import StarCanvas from "./components/StarCanvas/StarCanvas";
import Footer from "./components/Footer/Footer";
import Projects from "./pages/Projects/Projects";
import Resume from "./pages/Resume/Resume";
export default function App() {
  return (
    <>
      <Header />
      <StarCanvas />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </>
  );
}
