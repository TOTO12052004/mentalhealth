import { Link } from "react-router";

const DashboardProduct = () => {
  return (
    <div className="w-full h-full">
      <div className="px-5 py-6">
        <Link>
          <button className="w-[10rem] h-[2.5rem] bg-[#48b1bf] rounded-md text-white text-sm font-[500]">
            Tambah Product
          </button>
        </Link>
      </div>

      <div className="relative overflow-x-auto sm:rounded-lg px-6">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border-[1px] border-slate-300 rounded-xl mt-5">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Medicine Code
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-white even:bg-gray-50 text-slate-600">
              <th scope="row" className="px-6 py-4 font-medium ">
                Apple MacBook Pro 17"
              </th>
              <td className="px-6 py-4">Silver</td>
              <td className="px-6 py-4">Laptop</td>
              <td className="px-6 py-4">$2999</td>
              <td className="px-6 py-4">
                <Link
                  to="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-2"
                >
                  Edit
                </Link>
                <Link
                  to="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline ml-2"
                >
                  Hapus
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default DashboardProduct;
