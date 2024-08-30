import Logo from "../component/Logo.jsx";

function Navbar() {
  return (
    <>
      <div className="w-full bg-birutua flex justify-center">
        <div className="container flex justify-between px-40 py-6">
          <div className="w-24">
            <Logo />
          </div>
          <div className="text-white flex gap-10 text-base items-center font-mono">
            <div className="">
              <a href="" className="hover:border-b-2">
                About
              </a>
            </div>
            <div className="">
              <a href="" className="hover:border-b-2">
                Blog
              </a>
            </div>
            <div className="">
              <a href="" className="hover:border-b-2">
                Services
              </a>
            </div>
            <div className="">
              <a href="" className="hover:border-b-2">
                Contacts
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
