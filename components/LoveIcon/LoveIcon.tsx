import { FaHeart } from "react-icons/fa";
const LoveIcon = () => {
  return (
    <button className="bg-orange-600 rounded-full h-[30px] w-[30px] border-none flex items-center text-center justify-center ">
      <span>
        <FaHeart />
      </span>
    </button>
  );
};

export default LoveIcon;
