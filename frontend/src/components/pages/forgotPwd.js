import { useEffect, useState } from "react";
import FailedAlert from "../alerts/FailedAlert";
import SuccessAlert from "../alerts/SuccessAlert";
import api from "../../config/api";
import { useNavigate, useParams } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible, AiFillLock } from "react-icons/ai";

function ForgotPwd() {
  // hooks
  const [password, setPassword] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFailure, setIsFailure] = useState(false);
  const [confirmPwd, setConfirmPwd] = useState("");
  const [status, setStatus] = useState();

  const { id } = useParams();
  const navigate = useNavigate();

  const [typeInput, setTypeInput] = useState("password");
  const [showHidePassword, setShowHidePassword] = useState(false);

  // handle function
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPwd = (e) => {
    setConfirmPwd(e.target.value);
  };

  const handleUpdate = (e) => {
    e.preventDefault(); // prevent ppl spam click
    const sendingData = {
      password,
    };
    if (password === confirmPwd) {
      api
        .put(`/user/forgotpwd/${id}`, sendingData)
        .then(function (response) {
          if (response.status === 200) {
            setIsSuccess(true);
            setTimeout(() => {
              navigate("/signin");
            }, 1500);
          }
        })
        .catch(function (error) {
          console.log(error);
          setIsFailure(true);
        });
    } else {
      setIsFailure(true);
      setStatus("Passwords Don't Match!");
    }
  };

  useEffect(() => {
    if (showHidePassword === true) {
      setTypeInput("text");
    } else {
      setTypeInput("password");
    }
  }, [showHidePassword]);

  return (
    <div>
      {/* success alert */}
      {(isSuccess && (
        <SuccessAlert message=" Your password has been updated successfully!" />
      )) ||
        (isFailure && <FailedAlert message="Update failed" />)}
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
          <form className="w-full max-w-sm" onSubmit={handleUpdate}>
            <h1 className="text-gray-800 font-bold text-2xl mb-1 text-center">
              Forgot Password
            </h1>
            <p className="text-sm font-normal text-gray-600 mb-7 text-center">
              Please input your new password and confirm
            </p>
            <label
              className="block text-black-500 font-bold md:text-left pr-4"
              htmlFor="inline-full-name"
            >
              New Password:
            </label>

            <div className="flex items-center border-2 px-2 rounded-2xl">
              <AiFillLock />
              <input
                className="pl-2 outline-none border-none w-full"
                id="inline-full-name"
                type={typeInput}
                onChange={handleChangePassword}
                placeholder="New password"
                required
              />
              <span onClick={() => setShowHidePassword(!showHidePassword)}>
                {!showHidePassword ? (
                  <AiFillEyeInvisible color="rgb(55 65 81)" />
                ) : (
                  <AiFillEye color="rgb(55 65 81)" />
                )}
              </span>
            </div>

            <label
              className="block text-black-500 font-bold md:text-left mt-4 pr-4"
              htmlFor="inline-full-name"
            >
              Confirm Password:
            </label>
            <div className="flex items-center border-2 px-2 rounded-2xl">
              <AiFillLock />
              <input
                className="pl-2 outline-none border-none w-full"
                id="confirmPassword"
                type={typeInput}
                onChange={handleConfirmPwd}
                placeholder="Confirm password"
                required
              />
              <span onClick={() => setShowHidePassword(!showHidePassword)}>
                {!showHidePassword ? (
                  <AiFillEyeInvisible color="rgb(55 65 81)" />
                ) : (
                  <AiFillEye color="rgb(55 65 81)" />
                )}
              </span>
            </div>
            <p className="mt-2 text-xs text-red-500">{status}</p>
            <div className="md:flex md:items-center">
              <div className="md:w-1/4"></div>
              <button
                className="mt-4 md:w-1/2 shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Save Change
              </button>
              <div className="md:w-1/4"></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPwd;
