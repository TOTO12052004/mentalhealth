import { Link } from "react-router";
import { IoStorefront } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";

const ProductCard = () => {
  return (
    <div className="w-[48%] md:w-[10rem] xl:w-[14rem] min-h-[4rem] sm:border-[1px] sm:border-slate-300 rounded-xl overflow-hidden hover:shadow-md transition-all">
      <Link to={"/products/12"}>
        <img
          className="w-full h-[8rem] object-cover border-slate-500"
          src="/images/amlodipine.jpeg"
          alt=""
        />
        <div className="px-5 pb-4 pt-2">
          <h2 className="text-lg font-[500]">Amlodipine Besillate 5mg</h2>
          <p className="mt-3 text-[1rem] bg-gradient-to-r from-[#06beb6] to-[#48b1bf] text-transparent bg-clip-text font-[500]">
            Rp5.000
          </p>
          <span className="flex gap-1 items-center text-[.65rem] sm:text-[.75rem] mt-2 text-slate-500"><IoStorefront /> Bandung Farma</span>
          <span className="flex gap-1 items-center text-[.75rem] sm:text-[.85rem] mt-2"><MdLocationOn /> Bandung Timur</span>

        </div>
      </Link>
    </div>
  );
};
export default ProductCard;
