
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./about";
import Projects from "./projects";
import Contact from "./contact";

function App() {
    return (
        <BrowserRouter>
            <div className="app">

                <header className="navbar">
                    <div className="logo">MEDHANA ALWAL</div>

                    <nav>
                        <Link to="/">About</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contact</Link>
                    </nav>
                </header>

                <Routes>
                    <Route path="/" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>

                <footer className="footer">
                    <p>© 2026 Medhana. All Rights Reserved.</p>
                </footer>

            </div>
        </BrowserRouter>
    );
}

export default App;

