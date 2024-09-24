// import bedFrame from "../assets/OttomanSideOpeningBaseopenviewinside.webp";
// import bedStand from "../assets/image-swatches-1_1_1693689045149-1693689607.webp";
// import fullBed from "../assets/ottoman_designed.webp";
// import bedSoft from "../assets/bed_sosoft.webp";

const Collection = () => {
  return (
    <div className="h-[800px] md:h-[600px] px-3">
      <div className="hidden md:flex justify-center items-center gap-3 py-4 capitalize">
        <span className="border w-full"></span>
        <h1 className="font-bold text-3xl">collections</h1>
        <span className="border w-full"></span>
      </div>
      <div className="h-[790px] md:h-[500px]  block md:flex justify-center items-start gap-4 py-4 capitalize">
        <div className="h-[500px] md:h-full   overflow-hidden">
          <div className="w-full md:w-[500px] h-[200px]  flex justify-center items-end bg-[url('./assets/OttomanSideOpeningBaseopenviewinside.webp')] bg-center bg-cover bg-no-repeat  cursor-pointer hover:scale-110 transform transition-transform duration-500">
            <div className="py-3 px-4 bg-white text-black  font-bold mb-3 ">
              <h1>ottoman beds</h1>
            </div>
          </div>
          <div className="flex w-full md:w-[500px] h-[260px] mt-4 overflow-hidden">
            <div className=" w-full h-[250px] flex justify-center items-end bg-[url('./assets/swatches.webp')] bg-center bg-cover bg-no-repeat  cursor-pointer hover:scale-110 transform transition-transform duration-500">
              <div className="w-28 py-3 px-4 bg-white text-black  font-bold mb-3">
                <h1>bed & bed frame accesories</h1>
              </div>
            </div>
            <div className=" w-full h-[250px]  flex justify-center items-end bg-[url('./assets/ottoman_designed.webp')] bg-center bg-cover bg-no-repeat  cursor-pointer hover:scale-110 transform transition-transform duration-500">
              <div className="py-3 px-4 bg-white text-black  font-bold mb-3">
                <h1>furniture</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[500px] h-[250px] md:h-full overflow-hidden">
          <div className="w-full md:w-[500px] h-[250px]  md:h-full   flex justify-center items-end  bg-[url('./assets/bed_sosoft.webp')] bg-center bg-cover bg-no-repeat  cursor-pointer hover:scale-110 transform transition-transform duration-500">
            <div className="py-3 px-4 bg-white text-black  font-bold mb-3">
              <h1>mattress</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
