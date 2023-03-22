import './App.css';
// import MobileNumber from "./components/enterMobileNumber/MobileNumber";
// import OtpVerification from "./components/otp/OtpVerification";
// import CreateCode from "./components/createCode/CreateCode";
import Navbar from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginScreen } from './components/logs/LoginScreen.jsx';
import { SignupScreen } from './components/logs/SignupScreen.jsx';
import { HomeScreen } from './components/homeScreen/HomeScreen.jsx';
// import Rewards from './components/rewards/Rewards.jsx';
// import Blog from './components/blog/Blog.jsx';
// import BlogPage from './components/blogPage/BlogPage.jsx';
import BlogComing from './components/blogComing/BlogComing.jsx';
import { ErrorPage } from './components/errorPage/ErrorPage.jsx';
// import { useMediaQuery } from "react-responsive";



function App()
{
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<HomeScreen />} />
            <Route exact path="/login" element={<LoginScreen />} />
            <Route exact path="/sign-up" element={<SignupScreen />} />
            <Route exact path="/reward" element={<BlogComing />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
