import HiUser from "./HiUser";

function TopNavigation() {
  return (
    <nav
      id="header"
      className="w-full z-30 top-0 py-1 bg-gradient-to-b from-white to-purple-200"
    >
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">
        <label htmlFor="menu-toggle" className="cursor-pointer md:hidden block">
          <svg
            className="fill-current text-gray-900"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </label>
        <input className="hidden" type="checkbox" id="menu-toggle" />

        <div
          className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1"
          id="menu"
        >
          <nav>
            <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
              <li>
                <div className="flex justify-center">
                  <div className="dropdown relative">
                    <button
                      className="dropdown-toggle inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg active:text-white transition duration-150 ease-in-out flex items-center whitespace-nowrap"
                      type="button"
                      id="dropdownMenuButton2"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Movie
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="caret-down"
                        className="w-2 ml-2"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                      >
                        <path
                          fill="currentColor"
                          d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                        ></path>
                      </svg>
                    </button>
                    <ul
                      className="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none bg-gray-800"
                      aria-labelledby="dropdownMenuButton2"
                    >
                      <li>
                        <a
                          className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-300 hover:bg-gray-700 hover:text-white focus:text-white focus:bg-gray-700 active:bg-blue-600"
                          href="http://localhost:3000/movies/now-showing"
                        >
                          Now showing
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-300 hover:bg-gray-700 hover:text-white focus:text-white focus:bg-gray-700"
                          href="http://localhost:3000/movies/upcoming"
                        >
                          Upcoming
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              {/* <li>
                <a
                  className="inline-block no-underline hover:text-purple-800 hover:no-underline py-2 px-4"
                  href="#"
                >
                  Memberships
                </a>
              </li> */}
              {/* <li>
                <a
                  className="inline-block no-underline hover:text-purple-800 hover:no-underline py-2 px-4"
                  href="#"
                >
                  Price
                </a>
              </li> */}
            </ul>
          </nav>
        </div>

        <div className="order-1 md:order-2">
          <a
            className="flex items-center tracking-wide no-underline hover:no-underline font-bold text-purple-800 text-xl "
            href="http://localhost:3000"
          >
            MOVIE CINEMA
          </a>
        </div>

        <div className="order-2 md:order-3 flex items-center" id="nav-content">
          <HiUser />
        </div>
      </div>
    </nav>
  );
}

export default TopNavigation;
