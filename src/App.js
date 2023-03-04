import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Home, AllReviews, AddItems, MyItems, LogIn, SignUp, CarGallary, Blogs, ManageInventoris, StockUpdate, NotFound } from "./Pages";

import { MenuBar, Footer, RequireAuth } from "./Pages/Shared";


function App() {

  useEffect(() => { AOS.init() }, [])


  return (
    <>
      <MenuBar />
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
