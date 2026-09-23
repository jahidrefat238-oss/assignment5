import logo from "../../assets/B14-A05-DevStack/assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="container mx-auto py-10">
        <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-12">

        
          <div>
            <img src={logo} alt="Dev Stack" className="h-10" />

            <p className="mt-6 max-w-md text-sm leading-6 text-[#64748B]">
              Curated tools, technologies, and resources for developers building <br></br>modern software.
            </p>

            <div className="mt-8 flex gap-6 text-sm font-medium text-[#475569]">
              <a href="#">GitHub</a>
              <a href="#">Twitter</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>

    
          <div>
            <h3 className="font-semibold uppercase tracking-wide text-[#111827]">
              Product
            </h3>

            <div className="mt-6 flex flex-col gap-4 text-[#64748B]">
              <a href="#">Home</a>
              <a href="#">Technologies</a>
              <a href="#">Projects</a>
            </div>
          </div>

        
          <div>
            <h3 className="font-semibold uppercase tracking-wide text-[#111827]">
              Company
            </h3>

            <div className="mt-6 flex flex-col gap-4 text-[#64748B]">
              <a href="#">About</a>
              <a href="#">Contact</a>
              <a href="#">Careers</a>
            </div>
          </div>

          
          <div>
            <h3 className="font-semibold uppercase tracking-wide text-[#111827]">
              Legal
            </h3>

            <div className="mt-6 flex flex-col gap-4 text-[#64748B]">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>

        </div>

        
        <div className="mt-20 flex items-center justify-between border-t border-gray-200 pt-10 text-sm text-[#94A3B8]">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;