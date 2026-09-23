import type { ITechnology } from "../../../types/technology";
import TechnologyIcon from "../TechnologyIcon";
interface TechnologyCardProps {
  technology: ITechnology;
  addToStack: (technology: ITechnology) => void;
}

const TechnologyCard = ({ technology, addToStack }: TechnologyCardProps) => {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <TechnologyIcon technology={technology} />
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

      <button
        onClick={() => addToStack(technology)}
        className="mt-4 w-full rounded-lg bg-gray-900 py-2 text-sm font-medium text-white transition cursor-pointer hover:bg-gray-700"
      >
        Add to Stack
      </button>
    </div>
  );
};

export default TechnologyCard;
