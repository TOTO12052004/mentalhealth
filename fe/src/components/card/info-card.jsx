import { Link } from "react-router";
import { MdMedicalServices } from "react-icons/md";
import { FaHospitalAlt } from "react-icons/fa";

const InfoCard = ({data}) => {
  return (
    <div className="col-span-8 md:col-span-4 lg:col-span-4 xl:col-span-2 flex gap-3 border-[1px] border-slate-300 px-5 py-3 rounded-xl">
      <Link className="w-full flex gap-3" to={`/chats/${data.id}`}>
        <img
          className="w-[6rem] h-[6rem] object-cover rounded-xl"
          src="/images/dokter-1.webp"
          alt=""
        />
        <div className="py-3">
          <h2 className="font-semibold text-slate-600">{data.username}</h2>
          <span className="flex items-center gap-2 text-[.8rem] text-slate-500 mt-3">
            <MdMedicalServices /> {data.role}
          </span>
          <span className="flex items-center gap-2 text-[.85rem] text-slate-600">
            <FaHospitalAlt /> Apotek Sumedang
          </span>
        </div>
      </Link>
    </div>
  );
};
export default InfoCard;
