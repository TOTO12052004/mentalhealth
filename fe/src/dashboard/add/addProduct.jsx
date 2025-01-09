import { useState } from "react";
import postProduct from "../../api/postProduct";

const AddProduct = () => {
  const [form, setForm] = useState({
    name: "",
    medicine_code: "",
    description: "",
    category: "",
    price: "",
    stok: "",
    image: "",
    satuan: "",
  });
  const [error, setError] = useState({
    name: "",
    medicine_code: "",
    description: "",
    category: "",
    price: "",
    stok: "",
    image: "",
    satuan: "",
  });

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await postProduct(form);

      console.log(response);
    } catch (err) {
      setError((prev) => {
        return {
          ...prev,
          name: err.data.message?.name || "",
          medicine_code: err.data.message?.medicine_code || "",
          description: err.data.message?.description || "",
          category: err.data.message?.category || "",
          price: err.data.message?.price || "",
          stok: err.data.message?.stok || "",
          image: err.data.message?.image || "",
          satuan: err.data.message?.satuan || "",
        };
      });
    }
  };

  const formOnChange = (e) => {
    const { name, value, files } = e.target;
    console.log(name);

    setForm((prev) => {
      return {
        ...prev,
        [name]: files ? files[0] : value,
      };
    });
  };
  return (
    <div className="px-6 mb-32">
      <div className="mt-5">
        <h2 className="text-slate-500 text-xl">Add Product</h2>
      </div>
      <div className="mt-5">
        <div class="mb-5">
          <label
            for="text"
            className="block mb-2 text-sm font-medium text-slate-500"
          >
            product name
          </label>
          <input
            onChange={formOnChange}
            name="name"
            type="text"
            id="text"
            className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div class="mb-5">
          <label
            for="text"
            className="block mb-2 text-sm font-medium text-slate-500"
          >
            medicine code
          </label>
          <input
            onChange={formOnChange}
            name="medicine_code"
            type="text"
            id="text"
            className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div class="mb-5">
          <label
            for="text"
            className="block mb-2 text-sm font-medium text-slate-500"
          >
            description
          </label>
          <input
            onChange={formOnChange}
            name="description"
            type="text"
            id="text"
            className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div class="mb-5">
          <label className="block text-sm font-medium text-slate-500 mb-2">
            category
          </label>
          <select
            onChange={formOnChange}
            name="category"
            className="w-full bg-gray-50 border border-gray-300 py-2.5 px-3 rounded-lg text-slate-500"
          >
            <option>pilih...</option>
            <option value="obat keras">obat keras</option>
          </select>
        </div>
        <div class="mb-5">
          <label
            for="text"
            className="block mb-2 text-sm font-medium text-slate-500"
          >
            price
          </label>
          <input
            onChange={formOnChange}
            name="price"
            type="text"
            id="text"
            className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 text-slate-500"
            required
          />
        </div>
        <div class="mb-5">
          <label
            for="text"
            className="block mb-2 text-sm font-medium text-slate-500"
          >
            stok
          </label>
          <input
            onChange={formOnChange}
            name="stok"
            type="text"
            id="text"
            className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 text-slate-500"
            required
          />
        </div>
        <div class="mb-5">
          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            for="user_avatar"
          >
            Upload file
          </label>
          <input
            onChange={formOnChange}
            name="image"
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            aria-describedby="user_avatar_help"
            id="user_avatar"
            type="file"
          />
        </div>
        <div class="mb-5">
          <label className="block text-sm font-medium text-slate-500 mb-2">
            satuan
          </label>
          <select
            onChange={formOnChange}
            name="satuan"
            className="w-full bg-gray-50 border border-gray-300 py-2.5 px-3 rounded-lg text-slate-500"
          >
            <option>pilih...</option>\<option value={"cair"}>cair</option>
            <option value={"tablet"}>tablet</option>
            <option value={"kapsul"}>kapsul</option>
          </select>
        </div>
        <div class="mb-5">
          <button onClick={submitForm} className="w-[8rem] h-[2.5rem] bg-[#48b1bf] text-white text-sm rounded-xl">
            submit
          </button>
        </div>
      </div>
    </div>
  );
};
export default AddProduct;
