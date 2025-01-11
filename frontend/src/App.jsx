import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import MasterLayout from "./routes/MasterLayout";

export default function App() {
 return (
  <div className="max-w-6xl mx-auto">
   <Navbar />
   <MasterLayout />
   <Footer />
  </div>
 );
}
