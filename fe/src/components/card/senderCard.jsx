const SenderCard = ({ data }) => {
  return (
    <div className="mb-2">
      <div className="bg-[#48b1bf] text-white rounded-lg p-2 ml-auto min-w-[3rem] max-w-[80%] md:max-w-xs">
        {data.message}
      </div>
      <div className="text-xs text-gray-500 text-right mt-1">10:00</div>
    </div>
  );
};
export default SenderCard;
