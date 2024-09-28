const Header = () => {
  return (
    <header className="">
      <div className="nav-6  p-4 flex justify-between items-center border">

        <h1 className="text-xl font-bold">Carrot</h1>
        <nav className="space-x-4">
         <a href="#" className="text-black">
            Product
          </a>
          <a href="#" className="text-black">
            Our Why
          </a>
          <a href="#" className="text-black">
            About Us
          </a>
          <a href="#" className="text-black">
          Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;