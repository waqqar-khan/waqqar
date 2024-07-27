import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Blogs from "./components/Blogs";
import Recommendations from "./components/Recommendations";
import ContactMe from "./components/ContactMe";
import ReactJSBlog from "./components/blogs/ReactJSBlog";
import JavaScriptBlog from "./components/blogs/JavaScriptBlog";
import NextJSBlog from "./components/blogs/NextJSBlog";
import SystemDesignBlog from "./components/blogs/SystemDesignBlog";
import MiscellaneousBlog from "./components/blogs/MiscellaneousBlog";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about-me" element={<AboutMe />} />
          <Route path="blogs" element={<Blogs />}>
            <Route path="javascript" element={<JavaScriptBlog />} />
            <Route path="reactjs" element={<ReactJSBlog />} />
            <Route path="nextjs" element={<NextJSBlog />} />
            <Route path="system-design" element={<SystemDesignBlog />} />
            <Route path="miscellaneous" element={<MiscellaneousBlog />} />
          </Route>
          <Route path="recommendations" element={<Recommendations />} />
          <Route path="contact-me" element={<ContactMe />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
