function ResourceCard({ title, type, description, icon, link }) {
  return (
    <div
      className="
        bg-white rounded-xl p-6 shadow
        flex flex-col justify-between
        transition-all duration-300
        hover:-translate-y-2 hover:shadow-lg
      "
    >
      <div>
        <div className="text-4xl mb-4">{icon}</div>

        <h3 className="text-lg font-bold text-gray-800">
          {title}
        </h3>

        <p className="text-xs text-green-600 mt-1">✔ Open Source</p>

        <p className="text-sm text-blue-600 font-medium mt-1">
          {type}
        </p>

        <p className="text-sm text-gray-500 mt-3">
          {description}
        </p>
      </div>

      {/* Open Resource Button */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="
          mt-6 inline-block text-center
          bg-blue-600 text-white py-2 rounded-md font-semibold
          transition-all duration-300
          hover:bg-blue-700
          active:scale-95
          focus:outline-none focus:ring-2 focus:ring-blue-400
        "
      >
        Open Resource →
      </a>
    </div>
  );
}

export default ResourceCard;
