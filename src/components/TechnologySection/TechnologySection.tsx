import type { ITechnology } from "../../types/technology";
import { use, useState } from "react";
import TechnologyCard from "./TechnologyCard/TechnologyCard";
import { IoClose } from "react-icons/io5";
import TechnologyIcon from "./TechnologyIcon";
import { toast } from "react-toastify";
interface TechnologySectionProps {
  technologyPromise: Promise<ITechnology[]>;
}
const TechnologySection = ({ technologyPromise }: TechnologySectionProps) => {
  const technologies = use(technologyPromise);
  const [stack, setStack] = useState<ITechnology[]>([]);
  const addToStack = (technology: ITechnology) => {
    setStack([...stack, technology]);
    toast.success(`${technology.name} added to your stack`);
  };
  const removeFromStack = (technologyName: string) => {
    setStack(stack.filter((technology) => technology.name !== technologyName));
    toast.info(`${technologyName} removed from your stack`);
  };
  const removeAllFromStack = () => {
    setStack([]);
    toast.info("All technologies removed from your stack");
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
                isSelected={stack.some((item) => item.name === technology.name)}
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
              className="mt-3 flex items-center justify-between rounded-xl border border-gray-200 p-3"
            >
              <div className="flex items-center gap-3">
                <TechnologyIcon technology={technology} />
                <div>
                  <h4 className="font-medium">{technology.name}</h4>
                  <p className="mt-1 text-lg text-gray-500">
                    {technology.category}
                  </p>
                </div>
              </div>

              <button
                onClick={() => removeFromStack(technology.name)}
                className="text-gray-400 cursor-pointer hover:text-red-500"
              >
                <IoClose />
              </button>
            </div>
          ))}
          {stack.length > 0 && (
            <button
              onClick={removeAllFromStack}
              className="mt-4 w-full rounded-lg border border-orange-300 py-2 text-sm font-medium text-orange-600 cursor-pointer hover:bg-red-200"
            >
              Remove All
            </button>
          )}
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
