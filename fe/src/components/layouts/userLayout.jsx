import { Link, Outlet, useNavigate } from "react-router";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import Cookie from "js-cookie";

const UserLayout = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  window.onscroll = (e) => {
    if (isMobileNavOpen === true) {
      setMobileNavOpen(false);
    }
  };

  const router = useNavigate();

  useEffect(() => {
    const cookie = Cookie.get("token");

    if (cookie) {
      const decoded = jwtDecode(cookie);

      if (decoded.role === "apoteker" || decoded.role === "admin") {
        router("/dashboard");
      }
    }
  });

  return (
    <div className="w-screen box-border overflow-x-hidden">
      <nav className="w-full h-[6rem] fixed top-0 sm:px-24 px-[42px] py-6 flex justify-between items-center border-b-[1px] border-slate-300 shadow-sm shadow-slate-300 bg-[#F8F9FA] z-50">
        <Link
          className="text-2xl font-[500] bg-gradient-to-r from-[#06beb6] to-[#48b1bf] text-transparent bg-clip-text"
          to={"/"}
        >
          MentalHealth
        </Link>

        <ul className="hidden xl:flex gap-8 items-center text-slate-500 text-lg">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/products"}>Product</Link>
          </li>
          <li>
            <Link to={"/info"}>consultant</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
        </ul>

        <div className="flex items-center justify-center xl:hidden w-[3rem] h-[3rem] text-slate-500 border-[1px] border-slate-300 rounded-lg hover:bg-slate-200">
          <button
            onClick={() => setMobileNavOpen((prev) => !prev)}
            type="button"
            className="text-[2rem]"
          >
            <RxHamburgerMenu />
          </button>
        </div>
        {!Cookie.get("token") ? (
          <div className="hidden xl:flex gap-3">
            <Link to={"/login"}>
              <button className="w-[8rem] h-[2.5rem] bg-gradient-to-r from-[#06beb6] to-[#48b1bf] text-white font-semibold rounded-3xl text-sm">
                Login
              </button>
            </Link>
            <Link to={"/register"}>
              <button className="w-[8rem] h-[2.5rem] bg-white border-[3px] border-[#06beb6] font-semibold rounded-3xl text-sm bg-gradient-to-r from-[#06beb6] to-[#48b1bf] text-transparent bg-clip-text">
                Register
              </button>
            </Link>
          </div>
        ) : (
          ""
        )}
      </nav>
      <div
        id="mobile-nav"
        className={`fixed xl:hidden top-0 transform transition-transform duration-300 ease-in-out ${
          isMobileNavOpen ? "translate-x-0" : "translate-x-full"
        } xl:transition-none right-0 w-[60%] h-screen z-50 border-slate-300 bg-gradient-to-r from-[#06beb6] to-[#48b1bf] sm:px-12 px-6 py-8`}
      >
        <div className="relative w-full">
          <button
            onClick={() => setMobileNavOpen((prev) => !prev)}
            type="button"
            className="absolute right-0 text-3xl text-white"
          >
            <RxCross1 />
          </button>
        </div>
        <div className="flex flex-col gap-5 mt-[10rem]">
          <ul className="flex flex-col gap-12 items-center text-white text-xl">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/products"}>Product</Link>
            </li>
            <li>
              <Link to={"/info"}>consultant</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
          </ul>
        </div>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
export default UserLayout;
