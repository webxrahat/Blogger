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
  </Routes>
 );
}
