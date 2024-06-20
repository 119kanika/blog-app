const Navbar = () => {
  return (
    <div>
      <nav className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Blog App</h1>
        <ul className="flex justify-start gap-5">
          <li>Search</li>
          <li>
            <a href=""> Create </a>
          </li>
          <li>Profile</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
