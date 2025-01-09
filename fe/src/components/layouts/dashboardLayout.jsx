import { Link, Outlet, useNavigate } from "react-router";
import { AiFillProduct } from "react-icons/ai";
import { IoChatbubbleSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import Cookie from "js-cookie";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
const DashboardLayout = () => {
  const router = useNavigate();

  useEffect(() => {
    const cookie = Cookie.get("token");

    if (cookie) {
      const decoded = jwtDecode(cookie);

      if (decoded.role !== "apoteker" || decoded.role !== "admin") {
        router("/");
      }
    } else {
      router("/login")
    }
  });
  return (
    <div className="relative flex w-screen h-screen overflow-hidden">
      <aside className="w-[14rem] h-full  border-r-[1px] border-slate-300">
        <div className="p-6 bg-gradient-to-r from-[#06beb6] to-[#48b1bf] text-white">
          <h1 className="text-center m-0 p-0 font-[400]">MentalHealth</h1>
        </div>
        <div className="mt-8 px-6">
          <span className="text-sm font-[400] text-slate-500">Pages</span>
          <ul className="flex flex-col gap-3 mt-3 text-slate-600">
            <Link
              to={"/dashboard/products"}
              className="flex items-center gap-2"
            >
              <AiFillProduct />
              <li>products</li>
            </Link>
            <Link to={"/dashboard/chats"} className="flex items-center gap-2">
              <IoChatbubbleSharp />
              <li>chats</li>
            </Link>
            <Link to={"dashboard/users"} className="flex items-center gap-2">
              <FaUser />
              <li>users</li>
            </Link>
          </ul>
        </div>
      </aside>
      <div className="w-[calc(100%-14rem)] h-full">
        <header className="p-3 border-b-[1px] border-slate-400">
          <button className="text-3xl flex justify-center items-center w-[3rem] h-[3rem]">
            <RxHamburgerMenu />
          </button>
        </header>
        <main className="w-full h-full overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
export default DashboardLayout;
