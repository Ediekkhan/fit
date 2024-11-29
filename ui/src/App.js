import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Shop from "./pages/Shop"
import Footer from './components/Footer';
import Classes from "./pages/Classes";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Location from "./components/Location";
import ServicesPage from "./pages/ServicesPage";
import Login from "./components/Login";
import Register from "./components/Register";
import UserProfile from "./pages/UserProfile";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <div >
      <AuthContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/Servicespage" element={<ServicesPage />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/UserProfile" element={<UserProfile />} />
            
          </Routes>
        </BrowserRouter>
      
        <Location />
        <Footer />
      </AuthContextProvider>
    </div>
  );
}

export default App;
