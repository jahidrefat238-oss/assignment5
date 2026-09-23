import type { ITechnology } from "../../types/technology";

interface TechnologyBadgeProps {
  technology: ITechnology;
}

const TechnologyBadge = ({ technology }: TechnologyBadgeProps) => {
    if (technology.name === "Next.js") {
    return null;
  }
  let badgeColor = "bg-gray-100 text-gray-600";

  if (technology.name === "React" || technology.name === "Tailwind CSS") {
    badgeColor = "bg-cyan-100 text-cyan-700";
  } else if (technology.name === "Vue.js" || technology.name === "Node.js") {
    badgeColor = "bg-green-100 text-green-700";
  } else if (technology.name === "Svelte" || technology.name === "Java") {
    badgeColor = "bg-orange-100 text-orange-700";
  } else if (
    technology.name === "PostgreSQL" ||
    technology.name === "TypeScript" ||
    technology.name === "Docker"
  ) {
    badgeColor = "bg-blue-100 text-blue-700";
  } else if (technology.name === "JavaScript") {
    badgeColor = "bg-yellow-100 text-yellow-700";
  } else if (technology.name === "Redis") {
    badgeColor = "bg-red-100 text-red-700";
  }
  return (
    <span className={`rounded-full px-3 py-1 text-xs ${badgeColor}`}>
      {technology.badge}
    </span>
  );
};

export default TechnologyBadge;
