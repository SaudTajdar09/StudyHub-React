import ResourceCard from "../components/ResourceCard";
import resources from "../data/resources";

function Resources() {
  return (
    <div className="px-6 lg:px-20 py-14">
      <h1 className="text-white text-4xl font-extrabold mb-10">
        Learning Resources
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {resources.map(resource => (
          <ResourceCard
            key={resource.id}
            title={resource.title}
            type={resource.type}
            description={resource.description}
            icon={resource.icon}
            link={resource.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Resources;
