import { Routes, Route } from "react-router-dom";
import Header from "../components/header/Header";
import LandingPage from "../modules/landing-page/pages/LandingPage";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage />} />
      </Routes>
      
    </div>
  )
}

export default MainLayout;
