import { Link } from "react-router-dom";
import courses from "../data/courses";
import CourseCard from "../components/CourseCard";
import ResourceCard from "../components/ResourceCard";
import studyHero from "../assets/Study-hero.png";

function Home() {
  const featuredCourses = courses.slice(0, 3);
  const mostViewed = [...courses]
    .sort((a, b) => b.views - a.views)
    .slice(0, 3);

  return (
    <div className="flex flex-col gap-16 pb-20">
      {/* HERO */}
      <section className="bg-[#0f172a] py-16 px-6 lg:px-20 flex flex-col lg:flex-row items-center justify-between">
        <div className="max-w-2xl ">
          <h1 className="text-5xl font-extrabold text-white">
            Stop Procrastinating, <span className="bg-white/5 px-3 py-1 rounded-lg text-blue-300">Start Captivating.</span>
          </h1>

          <p className="mt-4 text-gray-300 text-xl leading-relaxed">
             The only platform where you can log in, learn at your pace, and truly turn the information age into your age of opportunity.
          </p>

          <Link
            to="/courses" className="inline-block mt-6 bg-blue-600 text-white px-7 py-3 rounded-lg font-semibold shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.7)] active:scale-95 transition-all duration-300"
          >
            Explore Courses
          </Link>
        </div>

        <img
          src={studyHero}
          alt="learning"
          className="mt-10 lg:mt-0 max-w-md drop-shadow-2xl"
        />
      </section>

      {/* FEATURED COURSES */}
      <section className="px-6 lg:px-20">
        <h2 className="text-3xl font-bold mb-6 text-white">Featured Courses</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      {/* MOST VIEWED */}
      <section className="bg-[#0f172a] py-16 px-6 lg:px-20">
        <h2 className="text-3xl font-bold mb-6 text-white">Most Viewed</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {mostViewed.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      {/* RESOURCES */}
      <section className="px-6 lg:px-20">
        <h2 className="text-3xl font-bold mb-6 text-white">Resources</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ResourceCard title="PDF Notes" type="Document"  />
          <ResourceCard title="Cheat Sheets" type="Reference" />
          <ResourceCard title="Video Tutorials" type="Media" />
          <ResourceCard title="Community Forums" type="Social" />
        </div>
      </section>
    </div>
  );
}

export default Home;
