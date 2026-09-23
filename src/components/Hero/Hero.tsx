import hero_Image from "../../assets/B14-A05-DevStack/assets/banner-stack.png";

const Hero = () => {
  return (
    <section className="container mx-auto grid grid-cols-2 items-center">
      {/* Left Side */}
      <div>
        <h1 className="text-5xl font-bold ">
          Build Your
          <br />
          <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>

        <p className="py-7 text-[#475569]">
          Explore frontend,backend,database and tooling options.
          <br />
          Compare them side by side,and put together in the satck that fits your
          <br /> next project.
        </p>

        <div className="flex gap-4">
          <button className="rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 px-6 py-3 font-medium text-white">
            Explore Technologies
          </button>
          <button className="rounded-lg border border-gray-300 px-6 py-3 font-medium text-gray-700">
            Learn More
          </button>
        </div>
      </div>

      {/* Right Side */}
      <div>
        <img src={hero_Image} alt="" className="w-full max-w-[500px]" />
      </div>
    </section>
  );
};

export default Hero;
