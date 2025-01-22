import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Post from "../pages/post";
import Header from "../components/header";



function AppRoute() {
  return (
    <div>
      <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post" element={<Post />} />
    </Routes>
    </div>
  );
}

export default AppRoute;