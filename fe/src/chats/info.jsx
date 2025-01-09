import { useEffect, useState } from "react";
import InfoCard from "../components/card/info-card";
import findPharmacist from "../api/findPharmacist";

const Info = () => {
  const [loading, setLoading] = useState(false);
  const [pharmacistData, setPharmacistData] = useState([]);

  const fetchPharmasist = async () => {
    setLoading(true);
    try {
      const response = await findPharmacist();
      setPharmacistData(response);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchPharmasist();
  }, []);
  return (
    <div className="px-6 xl:px-12 py-3 mt-32">
      <div className="flex justify-between items-center">
        <h1 className="text-slate-600 font-bold">
          Silahkan Pilih Apoteker untuk berkonsultasi :{" "}
        </h1>

        <input
          type="text"
          className="w-[24rem] h-[2.5rem] border-[1px] border-slate-300 rounded-lg px-3 outline-none text-slate-500"
          placeholder="cari apoteker"
        />
      </div>
      <div className="flex mt-8">
        <div className="w-full grid grid-cols-8 gap-3 ">
          {loading ? (
            <p>Loading...</p>
          ) : (
            pharmacistData.map((pharmacist) => <InfoCard key={pharmacist.id} data={pharmacist} />)
          )}
        </div>
      </div>
    </div>
  );
};
export default Info;
