import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import "./assets/style/style.scss";
import StarCanvas from "./components/StarCanvas/StarCanvas";
export default function App() {
  return (
    <>
      <Header />
      <StarCanvas />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}
