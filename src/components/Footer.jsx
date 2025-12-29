function Footer() {
  return (
    <footer className="bg-[#16203b] text-white ">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-8 md:grid-cols-4">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-blue-400">
            Study<span className="text-white">Hub</span>
          </h2>
          <p className="mt-3 text-sm text-gray-300">
            Learn smarter with curated courses and essential resources.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300 cursor-pointer">
            <li>Home</li>
            <li>Courses</li>
            <li>Wishlist</li>
            <li>Resources</li>
          </ul>
        </div>

        {/* Version & Update History */}
        <div>
          <h3 className="font-semibold mb-3">Version </h3>
          <ul className="space-y-2 text-sm text-gray-300 ">
            <li>Version 1.0.0</li>
            <li>Last Updated: December 2025 </li>
          </ul>
        </div>

        {/* Copyright */}
        <div>
          <h3 className="font-semibold mb-3">About</h3>
          <p className="text-sm text-gray-300">
            © {new Date().getFullYear()} StudyHub.  
            All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
