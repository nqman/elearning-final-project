import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./templates/MainLayout/MainLayout";
import Home from "./module/home/page/Home";
import NotFound from "./components/NotFound/NotFound";
import Course from "./pages/Course/Course";
import BlogContent from "./pages/Blog/BlogContent";
import Detail from "./pages/Detail";
import Login from "./pages/Login&Register/Login";
import Event from "./pages/Event";
import Profile from "./pages/User/Profile";
import Category from "./pages/Category/Category";
import AdminTemplate from "./templates/AdminLayout/AdminTemplate";
import AdminLogin from "./pages/admin/AdminLogin/AdminLogin";
import AdminUser from "./pages/admin/AdminUser/AdminUser";
import AdminCourse from "./pages/admin/AdminCourse/AdminCourse";
import Develop from "./pages/admin/Developmenting/Develop";

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
            <Route path="/category/:maDanhMuc" element={<Category />} />
            <Route path="/detail/:maKhoaHoc" element={<Detail />} />
          </Route>
          <Route path="/login" element={<Login />} />

          <Route path="/admin" element={<AdminTemplate />}>
            <Route index element={<AdminUser />} />
            <Route path="/admin/course" element={<AdminCourse />} />
            <Route path="/admin/enroll" element={<Develop />} />
          </Route>
          <Route path="/admin/login" element={<AdminLogin />} />
          {/* TRANG NOT FOUND */}
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
