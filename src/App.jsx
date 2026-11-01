import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import Home from "./pages/HomePage/Home.jsx";
import About from "./pages/AboutPage/About.jsx";
import Services from "./pages/ServicesPage/Services.jsx";
import ServiceDetail from "./pages/ServiceDetailsPage/ServiceDetail.jsx";
import Projects from "./pages/ProjectsPage/Projects.jsx";
import Gallery from "./pages/GalleryPage/Gallery.jsx";
import Blog from "./pages/BlogPage/Blog.jsx";
import Contact from "./pages/ContactPage/Contact.jsx";
import Book from "./pages/BookPage/Book.jsx";
import NotFound from "./pages/NotFoundPage/NotFound.jsx";
import BlogPost from "./pages/BlogPostPage/BlogPost.jsx";

export default function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="services" element={<Services />} />
                <Route path="services/:slug" element={<ServiceDetail />} />
                <Route path="projects" element={<Projects />} />
                <Route path="gallery" element={<Gallery />} />
                <Route path="blog" element={<Blog />} />
                <Route path="blog/:slug" element={<BlogPost />} />
                <Route path="contact" element={<Contact />} />
                <Route path="book" element={<Book />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}
