import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import Link from "next/link";
const SocialMediaIcons = () => {
  return (
    <div>
      <ul className="grid gap-10 grid-cols-3">
        <li className="h-[40px] w-[40px] flex items-center justify-center bg-orange-600 rounded-full">
          <Link href="#" className="block">
            <span className="text-white">
              <FaFacebookF />
            </span>
          </Link>
        </li>
        <li className="h-[40px] w-[40px] flex items-center justify-center bg-orange-600 rounded-full">
          <Link href="#" className="block">
            <span className="text-white">
              <FaInstagram />
            </span>
          </Link>
        </li>
        <li className="h-[40px] w-[40px] flex items-center justify-center bg-orange-600 rounded-full">
          <Link href="#" className="block">
            <span className="text-white">
              <FaXTwitter />
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SocialMediaIcons;
