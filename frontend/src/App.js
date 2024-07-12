// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./Assets/Styles/css/style.css";
import Navbar from "./Layouts/Navbar";
import Footer from "./Layouts/Footer";

import Home from "./Components/Home";
import About from "./Components/About";
import AddBus from "./Components/AddBus";
import BusPage from "./Components/BusPage";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import RecentBooking from "./Components/RecentBooking";
import Registration from "./Components/Registration";
import SearchBus from "./Components/SearchBus";
import TravelsLogin from "./Components/TravelsLogin";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <main className="py-3">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/addbus" exact element={<AddBus />} />
            <Route path="/buspage" exact element={<BusPage />} />
            <Route path="/contact" exact element={<Contact />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/recentbooking" exact element={<RecentBooking />} />
            <Route path="/registration" exact element={<Registration />} />
            <Route path="/searchbus" exact element={<SearchBus />} />
            <Route path="/travelslogin" exact element={<TravelsLogin />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
