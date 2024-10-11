import NavigateArrow from "@/components/NavigateArrow/NavigateArrow";
import { FaArrowRight } from "react-icons/fa6";
const SectionA = () => {
  return (
    <div className="mt-6">
      <div
        className="container text-white bg-[var(--faintBlack)]"
        style={{
          padding: "2rem",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card flex-col justify-between ">
            <NavigateArrow />
            <p className="text-4xl md:text-6xl mb-4">PERSONAL TRAINING</p>
            <div className="small-card">
              <p className="font-semibold">WE OFFER</p>
              <p className="text-lg leading-normal text-gray-300 mb-4 mt-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
                delectus ipsum voluptatibus.
              </p>
              <button className="hero-btn">Explore More</button>
            </div>
          </div>
          <div className="card">
            <div className="img-wrapper">
              <img
                src="https://images.pexels.com/photos/4162476/pexels-photo-4162476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="rounded"
              />
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="img-wrapper">
                <img
                  src="https://images.pexels.com/photos/9944671/pexels-photo-9944671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  className="rounded"
                />
              </div>
              <p className="mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur aliquid error laboriosam cum magni ullam
                consequuntur qui blanditiis officiis natus.
              </p>
              <button className="hero-btn items-center bg-[var(--pumpkinOrange)] py-1 px-6 mt-3">
                Explore
                <span className="block ml-2">
                  <FaArrowRight />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionA;
