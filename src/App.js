import { ToastContainer } from "react-toastify";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="main">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <nav className="navbar">
        <Navbar />
      </nav>
      <section className="mainSection">
        <header>
          <Home />
        </header>
        <main className="mainContent">
          <section className="projectSection">
            <Projects />
          </section>
          <section className="aboutSection">
            <About />
          </section>
          <section className="contactSection">
            <Contact />
          </section>
        </main>
        <footer>
          <h5>© 2023 tejas khera</h5>
          <img alt="leafSymbol" src="leaf.svg"></img>
        </footer>
      </section>
    </div>
  );
}

export default App;

//1. Add validation and message toast for form
