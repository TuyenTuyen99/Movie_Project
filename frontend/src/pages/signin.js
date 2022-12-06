import { useState } from "react";
import axios from "axios";

function Signin() {
  // hooks
  const [userName, setUserName] = useState("");
  const [password, setPwd] = useState("");

  // handle function
  const handleChangeUserName = (e) => {
    setUserName(e.target.value);
  };

  const handleChangePwd = (e) => {
    setPwd(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault(); // prevent ppl spam click
    const sendingData = {
      userName,
      password,
    };

    await axios.post(
      "http://localhost:8080/auth/login",
      sendingData
    ).then(function (response) {
      const {
        data: { msg },
      } = response;

      alert(msg);
    })
    .catch(function (error) {
      console.log(error);
    });
    
  };

  return (
    <div className="h-screen md:flex">
      <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden">
        <div>
          <h1 className="text-white font-bold text-4xl font-sans">
            Movie Cinema
          </h1>
          <p className="text-white mt-1">
            The best place that can give you the best experience
          </p>
          <button
            type="submit"
            className="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2"
          >
            <a href="http://localhost:3000">Homepage</a>
          </button>
        </div>
        <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
      </div>
      <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
        <form className="bg-white" onSubmit={handleLogin}>
          <h1 className="text-gray-800 font-bold text-2xl mb-1">Login</h1>
          <p className="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
            <input
              className="pl-2 outline-none border-none"
              type="text"
              name=""
              id=""
              placeholder="Full name"
              onChange={handleChangeUserName}
            />
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
            <input
              className="pl-2 outline-none border-none"
              type="password"
              name=""
              id=""
              placeholder="Password"
              onChange={handleChangePwd}
            />
          </div>
          <button
            type="submit"
            className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
            onClick={handleLogin}
          >
            Login
          </button>
          <a
            className="text-sm ml-2 hover:text-blue-400 cursor-pointer"
            href="http://localhost:3000/signup"
          >
            Don't have an account? Sign up here!
          </a>{" "}
          <br></br>
          <a
            className="text-sm ml-2 hover:text-blue-500 cursor-pointer"
            href="#"
          >
            Forgot Password ?
          </a>
        </form>
      </div>
    </div>
  );
}

export default Signin;
