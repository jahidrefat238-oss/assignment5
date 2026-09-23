import type { ITechnology } from "../../types/technology";
import { use } from "react";
import TechnologyCard from "./TechnologyCard/TechnologyCard";
interface TechnologySectionProps {
  technologyPromise: Promise<ITechnology[]>;
}
const TechnologySection = ({ technologyPromise }: TechnologySectionProps) => {
  const technologies = use(technologyPromise);
  return (
    <section className="container mx-auto py-16">
      <div className="mb-10">
        <h2 className="text-3xl font-bold">
          Explore The <span className="text-[#EC4899]">Technologies</span>
        </h2>

        <p className="mt-3 text-gray-600">
          Pick one technology per category to build your ideal stack
        </p>
      </div>
      <div className="grid grid-cols-4 gap-5">
        <div className="col-span-3">
          <div className="grid grid-cols-3 gap-4">
            {technologies.map((technology) => (
              <TechnologyCard key={technology.name} technology={technology} />
            ))}
          </div>
        </div>

        <div className="col-span-1">{/* Your Stack */}</div>
      </div>
    </section>
  );
};

export default TechnologySection;
