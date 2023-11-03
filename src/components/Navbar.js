function Navbar() {
  return (
    <div className="w-full relative">
      <div className="px-24 w-full flex justify-between items-center mx-auto mt-8">
        <div className="font-semibold text-lg">
          Architecture<sup>TM</sup>
        </div>

        <div className="flex justify-between gap-32">
          <div>
            <ul className="flex gap-8 font-medium">
              <li>Home</li>
              <li>Projects</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="flex gap-4">
            <div className="font-medium">Search</div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
