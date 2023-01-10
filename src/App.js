import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddItems from "./Pages/AddItems/AddItems";
import Blogs from "./Pages/Blogs/Blogs";
import AllCars from "./Pages/CarGallary/AllCars/AllCars";
import CarGallary from "./Pages/CarGallary/CarGallary/CarGallary";
import Exterior from "./Pages/CarGallary/Exterior/Exterior";
import Interior from "./Pages/CarGallary/Interior/Interior";
import RoadTest from "./Pages/CarGallary/RoadTest/RoadTest";
import Home from "./Pages/Home/Home/Home";
import AllReviews from "./Pages/Home/Reviews/AllReviews/AllReviews";
import LogIn from "./Pages/LogIn/LogIn";
import ManageInventoris from "./Pages/ManageInventoris/ManageInventoris/ManageInventoris";
import MyItems from "./Pages/MyItems/MyItems/MyItems";
import NotFound from "./Pages/NotFound/NotFound";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import RequireAuth from "./Pages/Shared/RequireAuth/RequireAuth";
import SingUp from "./Pages/SignUp/SingUp";
import StockUpdate from "./Pages/StockUpdate/StockUpdate";
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/additem"
          element={
            <RequireAuth>
              <AddItems />
            </RequireAuth>
          }
        />
        <Route
          path="/myitem"
          element={
            <RequireAuth>
              <MyItems />
            </RequireAuth>
          }
        />
        <Route
          path="/stockupdate/:stockId"
          element={
            <RequireAuth>
              <StockUpdate />
            </RequireAuth>
          }
        />
        <Route
          path="/manageitems"
          element={
            <RequireAuth>
              <ManageInventoris />
            </RequireAuth>
          }
        />
        <Route path="/allreviews" element={<AllReviews />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SingUp />} />
        <Route path="/carsgallary" element={<CarGallary />}>
          <Route index element={<AllCars />} />
          <Route path="allcars" element={<AllCars />} />
          <Route path="interior" element={<Interior />} />
          <Route path="exterior" element={<Exterior />} />
          <Route path="roadtest" element={<RoadTest />} />
        </Route>
        <Route path="/blogs" element={<Blogs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
