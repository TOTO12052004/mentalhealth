import { Link } from "react-router";
import { GoArrowRight } from "react-icons/go";

const Home = () => {
  return (
    <div className="w-full ">
      <div className="w-full h-screen grid lg:grid-cols-4 grid-cols-2 items-center overflow-x-hidden">
        <div className="px-8 md:px-12 col-span-2">
          <h1 className="md:ml-8 text-[2.5rem] md:text-[3.5rem] font-semibold bg-gradient-to-r from-[#06beb6] to-[#48b1bf] text-transparent bg-clip-text">
            MentalHealth
          </h1>
          <p className="md:ml-8 text-sm mt-2 text-slate-500">
            Lebih dari sekadar apotek, kami hadir sebagai mitra kesehatan
            terpercaya Anda. Dengan apoteker berpengalaman dan pilihan produk
            kesehatan yang lengkap, kami berkomitmen memberikan pelayanan
            terbaik untuk kesehatan Anda dan keluarga. Kunjungi kami sekarang
            dan rasakan perbedaannya.
          </p>
          <Link to={"/products"}>
            <button className="flex items-center justify-center md:ml-8 mt-4 px-6 gap-2 h-[3rem] rounded-xl bg-gradient-to-r from-[#06beb6] to-[#48b1bf] text-white font-semibold">
              Lihat obat - obatan{" "}
              <span className="text-lg outline-none">
                <GoArrowRight />
              </span>
            </button>
          </Link>
        </div>
        <div className="hidden lg:block col-span-2 transform scale-75">
          <img src="/images/hero.png" alt="pharmacy-hero-illustration" />
        </div>
      </div>
    </div>
  );
};
export default Home;
