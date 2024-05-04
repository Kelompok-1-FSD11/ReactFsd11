const Card = ({ children }) => {
  return (
    <div className="border border-gray-300 rounded-md h-[280px] mx-2 w-full lg:w-[180px] lg:h-[250px]">
      {children}
    </div>
  );
};
export default Card;
