import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import PostDetail from "../pages/PostDetail"
import AddPost from "../pages/AddPost";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import Layout from "../templates/Layout";
export default function Routing () {
  
    return (
        <>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>

          <Route index element={<Home />} />       
          <Route path="/AddPost" element={<AddPost  />} />  
          <Route path="/PostDetail/:id" element={<PostDetail />}/> 
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
          
          </Route>
        </Routes>
        </BrowserRouter>        
        </>
    );
}