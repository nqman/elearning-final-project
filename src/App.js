import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./components/MainLayout/MainLayout";
import Home from "./module/home/page/Home";
import NotFound from "./components/NotFound/NotFound";
import Login from "./module/home/components/Login&Register/Login";
import Course from "./module/home/components/Course/Course";
import BlogContent from "./module/home/components/Blog/BlogContent/BlogContent";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="course" element={<Course />} />
            <Route path="blog" element={<BlogContent />} />
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
