import type { ITechnology } from "../../../types/technology";
import { FaJava } from "react-icons/fa";
import {
  SiReact,
  SiVuedotjs,
  SiSvelte,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiRedis,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiDocker,
} from "react-icons/si";
interface TechnologyCardProps {
  technology: ITechnology;
}

const TechnologyCard = ({ technology }: TechnologyCardProps) => {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="text-3xl">
        {technology.name === "React" && <SiReact className="text-[#61DAFB]" />}

        {technology.name === "Vue.js" && (
          <SiVuedotjs className="text-[#4FC08D]" />
        )}

        {technology.name === "Svelte" && (
          <SiSvelte className="text-[#FF3E00]" />
        )}

        {technology.name === "Next.js" && (
          <SiNextdotjs className="text-black" />
        )}

        {technology.name === "Node.js" && (
          <SiNodedotjs className="text-[#339933]" />
        )}

        {technology.name === "PostgreSQL" && (
          <SiPostgresql className="text-[#4169E1]" />
        )}

        {technology.name === "Redis" && (
          <img src="/redis_logo.png" alt="Redis" className="h-12 w-15" />
        )}

        {technology.name === "JavaScript" && (
          <SiJavascript className="text-[#F7DF1E]" />
        )}

        {technology.name === "TypeScript" && (
          <SiTypescript className="text-[#3178C6]" />
        )}

        {/* {technology.name === "Java" && <SiJava className="text-[#ED8B00]" />} */}
        {technology.name === "Java" && <FaJava className="text-[#ED8B00]" />}
        {technology.name === "Tailwind CSS" && (
          <SiTailwindcss className="text-[#06B6D4]" />
        )}

        {technology.name === "Docker" && (
          <SiDocker className="text-[#2496ED]" />
        )}
      </div>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{technology.name}</h3>

        <span className="rounded-full bg-green-50 px-3 py-1 text-xs text-green-600">
          {technology.badge}
        </span>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-gray-500">
        {technology.description}
      </p>

      <div className="mt-5 flex items-center justify-between text-xs text-gray-500">
        <span className="rounded bg-gray-100 px-2 py-1">
          {technology.category}
        </span>

        <span>{technology.level}</span>

        <span>⭐ {technology.rating}</span>
      </div>

      <button className="mt-4 w-full rounded-lg bg-gray-900 py-2 text-sm font-medium text-white">
        Add to Stack
      </button>
    </div>
  );
};

export default TechnologyCard;
