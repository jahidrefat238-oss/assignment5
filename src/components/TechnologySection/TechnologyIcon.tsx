import type { ITechnology } from "../../types/technology";

interface TechnologyIconProps {
  technology: ITechnology;
}

const TechnologyIcon = ({ technology }: TechnologyIconProps) => {
  return (
    <img
      src={technology.icon}
      alt={technology.name}
      className=" mb-3 h-10 w-10 object-contain"
    />
  );
};

export default TechnologyIcon;
