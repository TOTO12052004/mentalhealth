import { Link, useNavigate } from "react-router";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import Cookies from "js-cookie";
import { useRef, useState } from "react";
import login from "../api/login";
import { jwtDecode } from "jwt-decode";

const Login = () => {
  const router = useNavigate();
  const username = useRef(null);
  const password = useRef(null);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState({ username: "", password: "" });

  const submitLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login({
        username: username.current.value,
        password: password.current.value,
      });
      Cookies.set("token", response.data.data.token);

      const decoded = jwtDecode(Cookies.get("token"));

      if (decoded.role === "apoteker") {
        router("/dashboard");
      }
      router("/");
    } catch (err) {
      console.log(err);
      setError((prev) => {
        return {
          ...prev,
          username: err.data.message?.username ?? err.data.message,
          password: err.data.message?.password ?? err.data.message,
        };
      });
    }
  };
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="xl:w-[24rem] xl:min-h-24 py-7 px-5 sm:border-[1px] sm:border-slate-300 rounded-xl">
        <h1 className="text-center text-2xl">Login</h1>
        <div className="w-full mt-5">
          <div className="my-2">
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
          <div className="relative  my-2">
            <label htmlFor="username" className="text-md text-slate-600">
              password
            </label>
            <input
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
          <div className="my-2">
            <Link
              className="text-[0.75rem] text-purple-500"
              to={"/forgot-password"}
            >
              Lupa Password?
            </Link>
          </div>
          <div className="mt-3 my-2">
            <button
              onClick={submitLogin}
              className="w-full h-[2.5rem] bg-purple-500 hover:bg-purple-600 transition font-semibold text-white rounded-xl"
            >
              Login
            </button>
          </div>
          <div className="my-2 text-center">
            <span className="text-[0.75rem] text-center text-slate-600">
              belum punya akun?{" "}
              <Link className="font-semibold text-purple-500" to={"/register"}>
                Register
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
