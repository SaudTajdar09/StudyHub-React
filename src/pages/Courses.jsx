import courses from "../data/courses";
import CourseCard from "../components/CourseCard";

function Courses() {
  return (
    <div className="px-6 lg:px-20 py-10">
      <h1 className="text-3xl font-bold mb-8 text-white">All Courses</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}

export default Courses;
