import { AiFillGithub, AiOutlineTeam } from "react-icons/ai";

function Footer() {
  return (
    <footer className="p-4 sm:p-6 dark:bg-gray-900 bg-gradient-to-b to-white from-purple-200 text-purple-800">
      <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
          <a href="http://localhost:3000" className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Movie Cinema
            </span>
          </a>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
            <h2 className="mb-6 pl-2 text-sm font-semibold text-gray-900 uppercase dark:text-white border-l-8 border-purple-800">
              Movies
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <a
                  href="http://localhost:3000/movies/now-showing"
                  className="hover:underline"
                >
                  Now showing
                </a>
              </li>
              <li>
                <a
                  href="http://localhost:3000/movies/upcoming"
                  className="hover:underline"
                >
                  Upcoming
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white border-l-8 border-purple-800 pl-2">
              Follow us
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4 flex">
                <AiFillGithub />
                <span className="pl-2">Github</span>
              </li>
              <li className="mb-4 flex">
                <AiOutlineTeam />
                <span className="pl-2">About Us</span>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white border-l-8 border-purple-800 pl-2">
              Our Team
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">Le Thi Ngoc Han</li>
              <li>Tong Thi Phuoc Tuyen</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
