const ReceiverCard = ({ data }) => {
  return (
    <div className="mb-2">
      <div className="bg-slate-100 text-slate-500 rounded-lg p-2 mr-auto max-w-[80%] md:max-w-xs">
        {data.message}
      </div>
      <div className="text-xs text-gray-500 text-right mt-1">10:00</div>
    </div>
  );
};
export default ReceiverCard;
