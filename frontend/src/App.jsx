import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreatePost from "./pages/CreatePost";
import PostDetails from "./pages/PostDetails";
import EditPost from "./pages/EditPost";
import Myblogs from "./pages/Myblogs";
import Profile from "./pages/Profile";

export default function App() {
 return (
  <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/login" element={<Login />} />
   <Route path="/register" element={<Register />} />
   <Route path="/write" element={<CreatePost />} />
   <Route path="/post/post/:id" element={<PostDetails />} />
   <Route path="/edit/:id" element={<EditPost />} />
   <Route path="/myblogs/:id" element={<Myblogs />} />
   <Route path="/profile/:id" element={<Profile />} />
  </Routes>
 );
}
