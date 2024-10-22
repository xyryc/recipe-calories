const Header = () => {
  return (
    <div className="font-lexend 2xl:my-12 my-5 flex items-center justify-between">
      {/* Menu start */}
      <div className="flex items-center gap-44">
        {/* title */}
        <h1 className="text-[32px] font-bold text-[#150B2B]">
          Recipe Calories
        </h1>

        {/* Navigations */}
        <ul className="flex items-center gap-12 text-gray-700">
          <li>Home</li>
          <li>Recipes</li>
          <li>About</li>
          <li>Search</li>
        </ul>
      </div>

      {/* Menu end */}
      <div className="flex items-center gap-4 text-gray-700">
        {/* search */}
        <div>
          <label className="input flex items-center gap-2">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" className="grow" placeholder="Search" />
          </label>
        </div>

        {/* user */}
        <div>
          <i className="fa-regular fa-user p-2 bg-[#0BE58A] rounded-full"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
