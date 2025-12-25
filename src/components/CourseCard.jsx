import { useEffect, useState } from "react";

function CourseCard({ course }) {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(stored);
  }, []);

  const isWishlisted = wishlist.some(item => item.id === course.id);

  const toggleWishlist = () => {
    let updated;

    if (isWishlisted) {
      updated = wishlist.filter(item => item.id !== course.id);
    } else {
      updated = [...wishlist, course];
    }

    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  return (
    <div className="bg-[#062c53] rounded-xl shadow hover:shadow-lg overflow-hidden transition-all duration-200 hover:-translate-y-2 active:scale-95 drop-shadow-lg border-2 border-transparent hover:border-blue-200">
      <img
        src={course.image}
        alt={course.title}
        className="h-60 w-full object-cover"
      />

      <div className="p-5 space-y-2">
        <h3 className="text-white text-xl font-bold">{course.title}</h3>
        <p className="text-sm text-gray-500">{course.instructor}</p>
        <p className="text-sm text-gray-500">
          ⏱ {course.duration} • 👁 {course.views}
        </p>

        <button className="mt-3 w-full py-2 rounded-md font-semibold bg-green-600 text-white transition-all duration-300 hover:bg-green-700 hover:shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-green-400"> Start Learning</button>
    
        
        
        <button
          onClick={toggleWishlist}
          className={`mt-3 w-full py-2 rounded-md font-semibold ${
            isWishlisted
              ? "bg-red-500 text-white transition-all duration-300 hover:shadow-lg active:scale-95 focus:outline-none focus:ring-2"
              : "bg-blue-600 text-white transition-all duration-300 hover:shadow-lg active:scale-95 focus:outline-none focus:ring-2"
          }`}
        >
          {isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
        </button>
      </div>
    </div>
  );
}

export default CourseCard;
