import type { ITechnology } from "../../types/technology";
import { FaJava } from "react-icons/fa";
import {
  SiReact,
  SiVuedotjs,
  SiSvelte,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiDocker,
} from "react-icons/si";

interface TechnologyIconProps {
  technology: ITechnology;
}

const TechnologyIcon = ({ technology }: TechnologyIconProps) => {
  return (
    <div className="text-3xl">
      {technology.name === "React" && <SiReact className="text-[#61DAFB]" />}

      {technology.name === "Vue.js" && (
        <SiVuedotjs className="text-[#4FC08D]" />
      )}

      {technology.name === "Svelte" && <SiSvelte className="text-[#FF3E00]" />}

      {technology.name === "Next.js" && <SiNextdotjs className="text-black" />}

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

      {technology.name === "Java" && <FaJava className="text-[#ED8B00]" />}

      {technology.name === "Tailwind CSS" && (
        <SiTailwindcss className="text-[#06B6D4]" />
      )}

      {technology.name === "Docker" && <SiDocker className="text-[#2496ED]" />}
    </div>
  );
};

export default TechnologyIcon;
