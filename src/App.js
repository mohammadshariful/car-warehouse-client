import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ManageInventoris from "./Pages/ManageInventoris/ManageInventoris/ManageInventoris";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import RequireAuth from "./Pages/Shared/RequireAuth/RequireAuth";
import StockUpdate from "./Pages/StockUpdate/StockUpdate";

import { Home, AllReviews, AddItems, MyItems, LogIn, SignUp, CarGallary, Blogs, NotFound } from "./Pages"


function App() {

  useEffect(() => { AOS.init() }, [])


  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/additem" element={<RequireAuth><AddItems /></RequireAuth>} />
        <Route path="/myitem" element={<RequireAuth><MyItems /></RequireAuth>} />
        <Route path="/stockupdate/:stockId" element={<RequireAuth> <StockUpdate /> </RequireAuth>} />
        <Route path="/manageitems" element={<RequireAuth> <ManageInventoris /> </RequireAuth>} />
        <Route path="/reviews" element={<AllReviews />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/car-gallary" element={<CarGallary />}></Route>
        <Route path="/blogs" element={<Blogs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
