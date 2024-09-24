const Hero = () => {
  return (
    <div className="h-[600px] flex items-center    bg-[url('./assets/download.jpg')] bg-center bg-cover bg-no-repeat">
      <div className="md:ml-16 ml-10 mt-2 md:mt-0 capitalize text-white">
        <h2 className="font-bold ">a place where dreams are made</h2>
        <h1 className="font-extrabold text-2xl md:text-6xl py-2 ">
          ottoman beds
        </h1>
        <button className="py-2 px-3 mt-3 bg-white capitalize text-black font-bold">
          explore now
        </button>
      </div>
    </div>
  );
};

export default Hero;
