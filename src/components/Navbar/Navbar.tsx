import logo from "../../assets/B14-A05-DevStack/assets/logo-text.png";

const Navbar = () => {
  return (
    <nav className=" container mx-auto flex items-center justify-between pt-5 sticky top-0 z-50">
      {/* left side */}
      <div className="flex items-center ">
        <img src={logo} alt="nav logo" />
      </div>
      {/* middle  */}
      <div className=" flex items-center gap-5 text-sm font-medium transition-colors">
        <a className="text-[#D91B7E] hover:bg-gray-400 " href="#">
          Home
        </a>
        <a className=" hover:bg-gray-400" href="#">
          Technologies
        </a>
        <a className=" hover:bg-gray-400" href="#">
          Project
        </a>
        <a className=" hover:bg-gray-400 " href="#">
          About
        </a>
        <a className=" hover:bg-gray-400 " href="#">
          Contact
        </a>
      </div>
      {/* right side */}
      <div className="flex items-center gap-5 font-[10px]">
        <button>Sign In</button>
        <button className="rounded-[15px] bg-[#D91B7E] px-3 py-0.5">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
