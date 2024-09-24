const Center = () => {
  return (
    <div className="block h-[850px] md:h-[500px] md:flex justify-center gap-3 px-3 mt-6 md:mt-28 capitalize">
      <div className=" h-[400px] w-full overflow-hidden">
        <div className="border h-[400px] w-full flex justify-center items-center bg-[url('./assets/otto-about.webp')] bg-cover bg-no-repeat bg-center hover:scale-110 transform transition-transform duration-500">
          <div className="text-white">
            <h1 className="font-bold text-2xl">lookbook 2023</h1>
            <p className="font-bold text-center">make love this look</p>
          </div>
        </div>
      </div>
      <div className="mt-4 md:mt-0 h-[400px] w-full overflow-hidden">
        <div className="h-[400px] w-full flex justify-center items-center bg-[url('./assets/about_us_ottoman.webp')] bg-cover bg-no-repeat bg-center hover:scale-110 transform transition-transform duration-500">
          <div className="">
            <p className="font-bold text-center">summer sale</p>
            <h1 className="font-extrabold text-3xl">up to 70%</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Center;
