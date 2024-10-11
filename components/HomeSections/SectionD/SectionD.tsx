import "./SectionD.css"
const SectionD = () => {
  return (
    <div className="text-white mt-[4rem]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-3xl leading-[2.5rem]">
              SUBSCRIBE TO OUR MONTHLY NEWS LETTER TO GET INFORMATION ON THE
              HAPPENINGS IN OUR GYM
            </p>
            <div className="news-letter mt-[1rem] flex justify-between items-center bg-[var(--faintBlack)] h-[40px] ">
              <input
                type="text"
                placeholder="Enter your email..."
                className="border-none bg-transparent text-gray-400 outline-none p-[10px] h-full basis-[calc(100% - 100px)]"
              />
              <button
                type="submit"
                className="border-none h-full w-[100px] bg-orange-600 text-white"
              >
                SEND
              </button>
            </div>
          </div>
          <div>
            <div className="img-wrapper rounded-lg">
              <img
                src="./assets/images/google.webp"
                alt=""
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionD;
