import Account from "../../Account";
import Logout from "../../Logout";

function HiUser() {
  const user = Account();
  if (user != "") {
    return (
      <nav>
        <ul className="md:flex items-center justify-between text-base text-purple-700 pt-4 md:pt-0">
          <li>
            <a
              className="inline-block no-underline py-2 px-4 hover:italic font-bold "
              href="http://localhost:3000/user"
            >
              Hi, {user.userName}
            </a>
          </li>
          <li>
            <a
              className="inline-block hover:text-black py-3"
              onClick={Logout}
              href="http://localhost:3000/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="px-1 py-1 fill-current text-purple-800 hover:bg-purple-600 hover:text-white hover:rounded"
                width="27"
                height="27"
                viewBox="-20 -20 562 500"
              >
                <path d="M534.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L434.7 224 224 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM192 96c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-53 0-96 43-96 96l0 256c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z" />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
  return (
    <nav>
      <ul className="md:flex items-center justify-between text-base text-purple-700 pt-4 md:pt-0">
        <li>
          <a
            className="inline-block no-underline py-1.5 text-xs px-4 bg-purple-600 text-white rounded "
            href="http://localhost:3000/signin"
          >
            <svg
              className="inline-block fill-current text-white-800 px-1"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="2 2 24 24"
            >
              <circle fill="none" cx="12" cy="7" r="3" />
              <path d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z" />
            </svg>
            LOGIN
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default HiUser;
