import NavigateArrow from "../NavigateArrow/NavigateArrow";
import { IoMdAddCircle } from "react-icons/io";
const SectionB = () => {
  return (
    <div className="mt-5">
      <div className="container text-white bg-[var(--faintBlack)] p-5">
        <NavigateArrow />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-center">
          <div className="card">
            <div className="bg-slate-800 py-3 px-5 rounded-lg">
              <div className="flex justify-between items-center">
                <p className="text-3xl">Premium</p>
                <p className="text-2xl font-semibold">$12.567</p>
              </div>
              <div className="mt-2">Explore</div>
              <p className="mt-2">
                Enjoy exclusive access to all facilities and classes.
              </p>
              <p className="mt-2">
                Personalized training plans designed for your goals.
              </p>
              <p className="mt-2">
                Monthly nutrition consultations with our experts.
              </p>
              <p className="mt-2">24/7 gym access for your convenience.</p>
            </div>
          </div>
          <div className="card">
            <p className="text-5xl font-semibold text-center">
              Flexible membership plans to suit your pocket
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-5">
              <div className="card bg-slate-700 p-3 rounded-lg">
                <p className="text-3xl text-center">Advanced</p>

                <button className="universal-btn">
                  Join{" "}
                  <span>
                    <IoMdAddCircle />
                  </span>
                </button>
                <p>
                  Join our Advanced Membership to elevate your fitness journey!
                  Designed for those who are serious about achieving their
                  goals, this plan offers:
                </p>
              </div>
              <div className="card bg-slate-700 p-3 rounded-lg">
                <p className="text-3xl text-center">Basic</p>
                <button className="universal-btn">
                  Join{" "}
                  <span>
                    <IoMdAddCircle />
                  </span>
                </button>
                <p>
                  Join our Basic Membership to elevate your fitness journey!
                  Designed for those who are serious about achieving their
                  goals, this plan offers:
                </p>
              </div>
              <div className="card bg-slate-700 p-3 rounded-lg">
                <p className="text-3xl text-center">Premium</p>
                <button className="universal-btn">
                  Join{" "}
                  <span>
                    <IoMdAddCircle />
                  </span>
                </button>
                <p>
                  Join our Premium Membership to elevate your fitness journey!
                  Designed for those who are serious about achieving their
                  goals, this plan offers:
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionB;
