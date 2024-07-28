import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Home from "./components/Home";
import ReactJSBlog from "./components/blogs/ReactJSBlog";
import JavaScriptBlog from "./components/blogs/JavaScriptBlog";
import NextJSBlog from "./components/blogs/NextJSBlog";
import SystemDesignBlog from "./components/blogs/SystemDesignBlog";
import MiscellaneousBlog from "./components/blogs/MiscellaneousBlog";
import ErrorBoundary from "./utils/ErrorBoundary";
import NotFound from './utils/NotFound';
import "./App.css";

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/javascript" element={<JavaScriptBlog />} />
            <Route path="/reactjs" element={<ReactJSBlog />} />
            <Route path="/nextjs" element={<NextJSBlog />} />
            <Route path="/system-design" element={<SystemDesignBlog />} />
            <Route path="/miscellaneous" element={<MiscellaneousBlog />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
