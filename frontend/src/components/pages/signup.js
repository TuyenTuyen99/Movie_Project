import { useEffect, useState } from "react";
import api from "../../config/api";
import { useNavigate } from "react-router-dom";
import SuccessAlert from "../alerts/SuccessAlert";
import FailedAlert from "../alerts/FailedAlert";
import {AiOutlineEnvironment, AiOutlineEye, AiOutlineEyeInvisible, AiOutlineLock, AiOutlineMail, AiOutlinePhone, AiOutlineUser } from "react-icons/ai";

function Signup() {
  // hooks
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFailure, setIsFailure] = useState(false);
  const [status, setStatus] = useState();

  const navigate = useNavigate();

  const [typeInput, setTypeInput] = useState("password");
  const [showHidePassword, setShowHidePassword] = useState(false);

  // handle function
  const handleChangeFullName = (e) => {
    setFullName(e.target.value);
  };

  const handleChangeUserName = (e) => {
    setUserName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePwd = (e) => {
    setPwd(e.target.value);
  };

  const handleConfirmPwd = (e) => {
    setConfirmPwd(e.target.value);
  };

  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleChangeAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleSignUp = async (e) => {
    e.preventDefault(); // prevent ppl spam click
    const sendingData = {
      fullName,
      userName,
      email,
      password,
      phone,
      address,
    };
    if (password === confirmPwd) {
      await api
      .post("/auth/signup", sendingData)
      .then(function (response) {
        if (response.status === 200) {
          setIsSuccess(true);
          setTimeout(() => {
            navigate("/signin");
          }, 3000);
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
      setTypeInput('text');
    } else {
      setTypeInput('password');
    }
  }, [showHidePassword]);

  return (
    <div>
      {/* Alert */}
      {(isSuccess && <SuccessAlert message="Successfully sign up!" />) ||
        (isFailure && <FailedAlert message="Failed to register!" />)}
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
        <div className="flex md:w-1/2 justify-center items-center bg-white">
          <form className="bg-white" onSubmit={handleSignUp}>
            <h1 className="text-gray-800 font-bold text-2xl mb-1 text-center">
              Registration
            </h1>
            <p className="text-sm font-normal text-gray-600 mb-7 text-center">
              Welcome to our website
            </p>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <AiOutlineUser />
              <input
                className="pl-2 outline-none border-none"
                type="text"
                name=""
                id=""
                placeholder="Full name"
                onChange={handleChangeFullName}
              />
            </div>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <AiOutlineUser />
              <input
                className="pl-2 outline-none border-none"
                type="text"
                required
                placeholder="Username"
                onChange={handleChangeUserName}
              />
            </div>

            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <AiOutlineMail />
              <input
                className="pl-2 outline-none border-none"
                type="text"
                required
                placeholder="Email"
                onChange={handleChangeEmail}
              />
            </div>

            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <AiOutlinePhone />
              <input
                className="pl-2 outline-none border-none"
                type="text"
                required
                placeholder="Phone"
                onChange={handleChangePhone}
              />
            </div>

            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <AiOutlineEnvironment />
              <input
                className="pl-2 outline-none border-none"
                type="text"
                name=""
                id=""
                placeholder="Address"
                onChange={handleChangeAddress}
              />
            </div>

            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <AiOutlineLock />
              <input
                className="pl-2 outline-none border-none"
                type={typeInput}
                placeholder="Password"
                onChange={handleChangePwd}
                required
              />
                <span
                  onClick={() => setShowHidePassword(!showHidePassword)}
                >
                  {!showHidePassword ? (
                    <AiOutlineEyeInvisible color="rgb(55 65 81)" />
                  ) : (
                    <AiOutlineEye color="rgb(55 65 81)" />
                  )}
                </span>
            </div>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
              <AiOutlineLock />
              <input
                className="pl-2 outline-none border-none"
                id="confirmPassword"
                type={typeInput}
                onChange={handleConfirmPwd}
                placeholder="Confirm password"
                required
              />
              <span
                  onClick={() => setShowHidePassword(!showHidePassword)}
                >
                  {!showHidePassword ? (
                    <AiOutlineEyeInvisible color="rgb(55 65 81)" />
                  ) : (
                    <AiOutlineEye color="rgb(55 65 81)" />
                  )}
                </span>
            </div>
            <p className="mt-2 text-xs text-red-500">{status}</p>
            <button
              type="submit"
              className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2 mt-4"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
