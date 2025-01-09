import { Link, useNavigate } from "react-router";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";

import { useRef, useState } from "react";
import register from "../api/register";
import Cookies from 'js-cookie'

const Register = () => {
  const fullname = useRef(null);
  const username = useRef(null);
  const phone_number = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const confirmPassword = useRef(null);
  const address = useRef(null);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setConfirmShowPassword] = useState(false);
  const [error, setError] = useState({
    fullname: "",
    username: "",
    phone_number: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: ""
  });
  const router = useNavigate();

  const submitgRegister = async (e) => {
    try {
      const response = await register({
        fullname: fullname.current.value,
        username: username.current.value,
        phone_number: phone_number.current.value,
        email: email.current.value,
        password: password.current.value,
        confirm_password: confirmPassword.current.value,
        address: address.current.value
      });
      Cookies.set('token', response.data.token)
      router("/");
    } catch (err) {
      setError((prev) => {
        return {
          ...prev,
          fullname: err.data.message?.fullname ?? "",
          username: err.data.message?.username ?? "",
          phone_number: err.data.message?.phone_number ?? "",
          email: err.data.message?.email ?? "",
          password: err.data.message?.password ?? "",
          confirmPassword:
            err.data.message?.confirm_password ?? "",
          address: err.data.message?.address ?? ""
        };
      });
    }
  };

  return (
    <div className="flex justify-center items-center w-screen sm:h-screen">
      <div className="xl:w-[42rem] xl:min-h-24 py-7 px-12 xl:px-8  rounded-xl">
        <h1 className="text-center text-2xl">Register</h1>
        <div className="grid grid-cols-2 sm:grid-cols-4 w-full mt-5 gap-3">
          <div className="my-2 col-span-4 sm:col-span-2">
            <label htmlFor="fullname" className="text-md text-slate-600">
              fullname
            </label>
            <input
              id="fullname"
              type="text"
              className="w-full h-[2.5rem] border-[1px] border-slate-300 mt-2 rounded-lg outline-none px-3"
              ref={fullname}
            />
            {error.fullname && (
              <span className="text-sm text-pink-600">{error.fullname}</span>
            )}
          </div>
          <div className="relative col-span-4 sm:col-span-2 my-2">
            <label htmlFor="username" className="text-md text-slate-600">
              username
            </label>
            <input
              ref={username}
              type="text"
              className="w-full h-[2.5rem] border-[1px] border-slate-300 mt-2 rounded-lg outline-none px-3"
            />
            {error.username && (
              <span className="text-sm text-pink-600">{error.username}</span>
            )}
          </div>
          <div className="relative col-span-4 sm:col-span-2 my-2">
            <label htmlFor="email" className="text-md text-slate-600">
              email
            </label>
            <input
              ref={email}
              type="text"
              className="w-full h-[2.5rem] border-[1px] border-slate-300 mt-2 rounded-lg outline-none px-3"
            />
            {error.email && (
              <span className="text-sm text-pink-600">{error.email}</span>
            )}
          </div>
          <div className="relative col-span-4 sm:col-span-2 my-2">
            <label htmlFor="phone_number" className="text-md text-slate-600">
              phone number
            </label>
            <input
              id="phone_number"
              ref={phone_number}
              type="text"
              className="w-full h-[2.5rem] border-[1px] border-slate-300 mt-2 rounded-lg outline-none px-3"
            />
            {error.phone_number && (
              <span className="text-sm text-pink-600">
                {error.phone_number}
              </span>
            )}
          </div>
          <div className="relative col-span-4 sm:col-span-2 my-2">
            <label htmlFor="password" className="text-md text-slate-600">
              password
            </label>
            <input
              id="password"
              autoComplete="off"
              ref={password}
              type={showPassword ? "text" : "password"}
              className="w-full h-[2.5rem] border-[1px] border-slate-300 mt-2 rounded-lg outline-none px-3"
            />
            <button onClick={() => setShowPassword((prev) => !prev)}>
              <span className="text-2xl absolute right-4 top-10">
                {showPassword ? <IoEye /> : <IoMdEyeOff />}
              </span>
            </button>
            {error.password && (
              <span className="text-sm text-pink-600">{error.password}</span>
            )}
          </div>
          <div className="relative col-span-4 sm:col-span-2 my-2">
            <label htmlFor="username" className="text-md text-slate-600">
              confirm password
            </label>
            <input
              ref={confirmPassword}
              type={showConfirmPassword ? "text" : "password"}
              className="w-full h-[2.5rem] border-[1px] border-slate-300 mt-2 rounded-lg outline-none px-3"
            />
            <button onClick={() => setConfirmShowPassword((prev) => !prev)}>
              <span className="text-2xl absolute right-4 top-10">
                {showConfirmPassword ? <IoEye /> : <IoMdEyeOff />}
              </span>
            </button>
            {error.confirmPassword && (
              <span className="text-sm text-pink-600">
                {error.confirmPassword}
              </span>
            )}
          </div>
          <div className="relative col-span-4 my-2">
          <label htmlFor="address" className="block text-slate-500 font-medium mb-2">Alamat</label>
            <textarea
              id="address"
              ref={address}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none"
              rows="3"
              required
            ></textarea>
            {error.address && (
              <span className="text-sm text-pink-600">
                {error.address}
              </span>
            )}
          </div>
          <div className="mt-5 col-span-4">
            <button
              onClick={submitgRegister}
              className="w-full h-[2.5rem] bg-purple-500 hover:bg-purple-600 transition font-semibold text-white rounded-xl"
            >
              Register
            </button>
          </div>
          <div className="my-2 text-center col-span-4">
            <span className="text-[0.75rem] text-center text-slate-600">
              sudah punya akun?{" "}
              <Link className="font-semibold text-purple-500" to={"/login"}>
                Login
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
