
import ProductCard from "../components/card/product-card";

const Product = () => {
  return (
    <div className="mt-32 px-2 sm:px-8 md:px-12">
      <input
        className="w-full sm:w-[18rem] md:w-[24rem] h-[3rem] border-[1px] border-slate-300 px-3 rounded-lg outline-none text-slate-500"
        type="text"
        placeholder="search..."
      />

      <div className="flex flex-wrap gap-3 justify-start mt-8 sm:mt-12">
        <ProductCard />
        <ProductCard />
        <ProductCard />
          
    
      </div>
    </div>
  );
};
export default Product;
