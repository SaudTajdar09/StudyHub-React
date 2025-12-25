import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Wishlist from "./pages/Wishlist";
import Resources from "./pages/Resources";
import Footer from "./components/Footer";
// Snowfall effect import
import Snowfall from "react-snowfall";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // This simulates the time it takes to load the site
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  // 1. If loading is true, show the Loader component
  if (loading) {
    return <Loader />;
  }

  // 2. Once loading is false, show the actual website
  return (
    <BrowserRouter>
      <Navbar />
      {/* Snowfall effect (December only) */}
      <Snowfall
    snowflakeCount={100}
    snowflakeColor={"red"}
    style={{
      position: "fixed",
      width: "100vw",
      height: "100vh",
      zIndex: 40,
      pointerEvents: "none",
    }}
  />
      <div className="flex flex-col min-h-screen bg-[#0f172a] pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;