import LoveIcon from "@/components/LoveIcon/LoveIcon";
import NavigateArrow from "@/components/NavigateArrow/NavigateArrow";
const SectionC = () => {
  return (
    <div className="mt-[3rem] ">
      <div className="container text-white bg-[--faintBlack] py-4 px-4">
        <div className="grid sm:grid-cols-1 md:grid-cols-2">
          <div>
            <NavigateArrow />
            <p className="text-4xl font-semibold my-3">SUCCESS STORIES</p>
            <p className="sm:mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur voluptatum placeat voluptatibus quisquam pariatur
              deserunt debitis autem eaque modi! Totam?
            </p>

            <LoveIcon />
          </div>
          <div className="grid xsm:grid-cols-1 md:grid-cols-2 gap-10">
            <div className="p-3 bg-slate-700 flex-row items-center justify-center relative">
              <img
                src="https://images.pexels.com/photos/6551174/pexels-photo-6551174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="h-full"
              />
              <div className="absolute bottom-6 left-[2rem] bg-[rgba(0,0,0,0.8)] p-3 rounded-lg">
                <p className="text-1xl">Ivy Anguas</p>
                <button className="bg-orange-600 sharp px-3 border">
                  Read more
                </button>
              </div>
            </div>
            <div className="p-3 bg-slate-700 flex-row items-center justify-center relative">
              <img
                src="https://images.pexels.com/photos/3289711/pexels-photo-3289711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="h-full"
              />
              <div className="absolute bottom-6 left-[2rem] bg-[rgba(0,0,0,0.8)] p-3 rounded-lg border-[3px solid var(--faintBlack)]">
                <p className="text-1xl">Kelvin Ndambo</p>
                <button className="bg-orange-600 sharp px-3 border">
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1  md:grid-cols-2 xl:grid-cols-4 mt-[3rem] gap-4 ">
          <div className="bg-slate-800 py-2 px-2">
            <p className="text-3xl font-semibold">6,3453</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia,
              accusamus qui voluptas, deserunt corruption
            </p>
          </div>
          <div className="bg-slate-800 py-2 px-2">
            <p className="text-3xl font-semibold">360</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia,
              accusamus qui voluptas, deserunt corruption
            </p>
          </div>
          <div className="bg-slate-800 py-2 px-2">
            <p className="text-3xl font-semibold">60%</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia,
              accusamus qui voluptas, deserunt corruption
            </p>
          </div>
          <div className="bg-slate-800 py-2 px-2">
            <p className="text-3xl font-semibold">20%</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia,
              accusamus qui voluptas, deserunt corruption
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionC;
