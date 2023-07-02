import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Forms from "./components/Forms";
import Footer from "./components/Footer";
import sol from "./img/Solutions suspension.png";
import given from "./img/Giving an injection.png";
import wound from "./img/Wound Sterilization.png";
import Services from "./components/Services";
import Auth from "./components/Auth";
import Clinics from "./components/Clinics";
import Services2 from "./components/Services2";
import Section from "./components/Section";
import About from "./components/About";
import CareRoom from "./components/CareRoom";
import Nursery from "./components/Nursery";
import Surgical from "./components/Surgical";
import Blood from "./components/Blood";
import ContactUs from "./components/ContactUs";
import Login from "./components/Login";
import AboutUs from "./components/AboutUs";
import Registration from "./components/Registration";
import Book from "./components/Book";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route
          path="/SolSuspension"
          element={<Forms title="Solutions suspension" img={sol} />}
        ></Route>
        <Route
          path="/WoundSterilization"
          element={<Forms title="Wound Sterilization" img={wound} />}
        ></Route>
        <Route
          path="/GivingAninjection"
          element={<Forms title="Giving an injection" img={given} />}
        ></Route>
        <Route path="/Services" element={<Services />}></Route>
        <Route path="/Services2" element={<Services2 />}></Route>
        <Route path="/Auth" element={<Auth />}></Route>
        <Route path="/Clinics" element={<Clinics />}></Route>
        <Route path="/Section" element={<Section />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/CareRoom" element={<CareRoom />}></Route>
        <Route path="/Nursery" element={<Nursery />}></Route>
        <Route path="/Surgical" element={<Surgical />}></Route>
        <Route path="/Blood" element={<Blood />}></Route>
        <Route path="/ContactUs" element={<ContactUs />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/AboutUS" element={<AboutUs />}></Route>
        <Route path="/Registration" element={<Registration />}></Route>
        <Route path="/Book" element={<Book />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
