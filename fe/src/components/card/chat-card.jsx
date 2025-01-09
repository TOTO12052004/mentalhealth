const ChatCard = () => {
  return (
    <div className="relative w-[18rem] border-[1px] border-slate-300 rounded-xl pr-4 flex items-center gap-5">
      <img
        src="/images/dokter-1.webp"
        className="w-[5rem] h-[5rem] object-cover rounded-xl"
        alt=""
      />
      <div>
        <h3 className="text-[.85rem] mt-2 font-semibold text-slate-600">
          dr. Hannah Joelyn
        </h3>
        <p className="line-clamp-1 text-slate-500 text-[0.75rem] mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, omnis.
        </p>
      </div>
      <div className="">
        <span class="bg-[#ff7a55] text-white text-[.7rem] font-bold rounded-full px-2 py-1 shadow animate-pulse">
          5
        </span>
      </div>
    </div>
  );
};
export default ChatCard;
