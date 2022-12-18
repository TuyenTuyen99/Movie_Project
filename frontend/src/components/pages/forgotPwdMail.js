import { useState } from "react";
import FailedAlert from "../alerts/FailedAlert";
import SuccessAlert from "../alerts/SuccessAlert";
import api from "../../config/api";

function ForgotPwdMail() {
  const [mailOrUserName, setMailOrUserName] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFailure, setIsFailure] = useState(false);

  const handleInput = (e) => {
    setMailOrUserName(e.target.value);
  };
  const handleSendMail = async (e) => {
    e.preventDefault(); // prevent ppl spam click
    const sendingData = {
      mailOrUserName,
    };

    await api
      .post(`/email/forgotpwd`, sendingData)
      .then(function (response) {
        if (response.status === 200) {
          setIsSuccess(true);
        }
      })
      .catch(function (error) {
        console.log(error);
        setIsFailure(true);
      });
  };
  return (
    <div>
      {/* success alert */}
      {(isSuccess && <SuccessAlert message="Email send successfully!" />) ||
        (isFailure && <FailedAlert message="Data is not valid!" />)}
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
          <form className="w-full max-w-sm" onSubmit={handleSendMail}>
            <h1 className="text-gray-800 font-bold text-2xl mb-1 text-center">
              Forgot Password
            </h1>
            <p className="text-sm font-normal text-gray-600 mb-7 text-center">
              Please input your Username or email
            </p>
            <div className="md:w-3/3">
              <input
                className="md:items-center bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 mb-4"
                id="inline-full-name"
                type="text"
                placeholder="Username or Email"
                onChange={handleInput}
              />
            </div>

            <div className="md:flex md:items-center">
              <div className="md:w-1/4"></div>
              
                <button
                  className="md:w-1/2 shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="button"
                  onClick={handleSendMail}
                >
                  Send Mail
                </button>
              
              <div className="md:w-1/4"></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPwdMail;
