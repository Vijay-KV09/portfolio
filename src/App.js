import '../src/style/App.css';
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import Main from "./components/main.jsx";
import About from "./pages/about.jsx";
import Contact from "./pages/contact.jsx";
import Resume from "./pages/resume.jsx";
import Project from "./pages/project.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/projects" element={<Project/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
