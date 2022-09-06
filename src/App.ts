import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectListContainer from "./components/ProjectListContainer/ProjectListContainer";
// import AboutPage from "./pages/AboutPage/AboutPage";
import { HomePage } from "./pages/HomePage";
import ProjectDetail from "./components/ProjectDetail/ProjectDetail";
import 'bootstrap/dist/css/bootstrap.min.css';

import './scss/style.scss';
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
    <div className="layout-base">
        <NavBar />
        <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/project/" element={<ProjectListContainer />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
        <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
