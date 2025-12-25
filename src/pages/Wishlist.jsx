import { useEffect, useState } from "react";
import CourseCard from "../components/CourseCard";

function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(stored);
  }, []);

  if (wishlist.length === 0) {
    return (
      <div className="px-6 lg:px-20 py-20 text-center">
        <h2 className="text-2xl font-bold text-white">Your Wishlist is Empty 💔</h2>
        <p className="text-gray-500 mt-2">Start adding courses you love.</p>
      </div>
    );
  }

  return (
    <div className="px-6 lg:px-20 py-10">
      <h1 className="text-3xl font-bold mb-8 ">My Wishlist</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {wishlist.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}

export default Wishlist;
