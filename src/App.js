import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./components/MainLayout/MainLayout";
import Home from "./module/home/page/Home";
import NotFound from "./components/NotFound/NotFound";
import Course from "./pages/Course/Course";
import BlogContent from "./pages/Blog/BlogContent";
import Detail from "./pages/Detail";
import Login from "./pages/Login&Register/Login";
import Event from "./pages/Event";
import Profile from "./pages/User/Profile";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="course" element={<Course />} />
            <Route path="blog" element={<BlogContent />} />
            <Route path="/event" element={<Event />} />
            <Route path="/profile" element={<Profile />} />

            <Route path="/detail/:maKhoaHoc" element={<Detail />} />
          </Route>
          <Route path="/login" element={<Login />} />
          {/* TRANG NOT FOUND */}
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
