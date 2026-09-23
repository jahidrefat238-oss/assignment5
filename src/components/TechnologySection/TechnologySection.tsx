import type { ITechnology } from "../../types/technology";
import { use, useState } from "react";
import TechnologyCard from "./TechnologyCard/TechnologyCard";
interface TechnologySectionProps {
  technologyPromise: Promise<ITechnology[]>;
}
const TechnologySection = ({ technologyPromise }: TechnologySectionProps) => {
  const technologies = use(technologyPromise);
  const [stack, setStack] = useState<ITechnology[]>([]);
  const addToStack = (technology: ITechnology) => {
    setStack([...stack, technology]);
  };
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
              <TechnologyCard
                key={technology.name}
                technology={technology}
                addToStack={addToStack}
              ></TechnologyCard>
            ))}
          </div>
        </div>

        <div className="col-span-1 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <h3 className="text-xl font-semibold">Your Stack</h3>

          <p className="mt-1 text-sm text-gray-400">
            {stack.length} Technologies Selected
          </p>
          {stack.map((technology) => (
            <div
              key={technology.name}
              className="mt-3 rounded-lg border border-gray-200 p-3"
            >
              <h4 className="font-medium">{technology.name}</h4>
              <p className="mt-1 text-xs text-gray-500">
                {technology.category}
              </p>
            </div>
          ))}
          {stack.length === 0 && (
            <div className="mt-4 flex h-14 items-center justify-center rounded-xl border border-dashed border-gray-200">
              <p className="text-sm text-gray-400">Your stack is empty.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
