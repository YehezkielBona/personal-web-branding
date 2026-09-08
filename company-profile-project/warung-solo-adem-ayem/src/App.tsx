import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import ProtectedRoute from "./components/ui/ProtectedRoute";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Service from "./pages/Service";
import Teams from "./pages/Teams";
import BlogList from "./pages/BlogList";
import CreateBlog from "./pages/CreateBlog";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* "index" = halaman default saat path persis "/" */}
        <Route index element={<Home />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="services" element={<Service />} />
        <Route path="teams" element={<Teams />} />
        <Route path="blog" element={<BlogList />} />
        <Route path="login" element={<Login />} />

        <Route
          path="create-blog"
          element={
            <ProtectedRoute>
              <CreateBlog />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;