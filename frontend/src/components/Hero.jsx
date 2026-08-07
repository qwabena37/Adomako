import { FaCarSide } from "react-icons/fa";

function Hero() {
  return (
    <section className="relative w-full h-[100vh] overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute w-full h-full object-cover"
      >
        <source
          src="/Video/video.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10">

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4 z-20">

          <h1 className="text-2xl text-gray-300 sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center">
            Welcome To Adomako Agyenkwa Enterprise
          </h1>

          <p className="mt-4 text-lg sm:text-xl text-center">
            Genuine Automobile Parts
          </p>

        </div>

        {/* Partner Brands */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm py-3 z-20">

          <div className="max-w-7xl mx-auto px-2 sm:px-4">

            <p className="text-center text-gray-300 text-[10px] sm:text-xs uppercase tracking-widest mb-2">
              Trusted Automobile Brands
            </p>

            <div className="flex justify-center items-center gap-3 sm:gap-5 md:gap-8 overflow-x-auto whitespace-nowrap scrollbar-hide">

              <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
                <FaCarSide className="text-white text-xs sm:text-sm md:text-base" />
                <span className="font-semibold text-white text-xs sm:text-sm md:text-base">
                  GENESIS
                </span>
              </div>

              <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
                <FaCarSide className="text-white text-xs sm:text-sm md:text-base" />
                <span className="font-semibold text-white text-xs sm:text-sm md:text-base">
                  KIA
                </span>
              </div>

              <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
                <FaCarSide className="text-white text-xs sm:text-sm md:text-base" />
                <span className="font-semibold text-white text-xs sm:text-sm md:text-base">
                  SSANGYONG
                </span>
              </div>

              <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
                <FaCarSide className="text-white text-xs sm:text-sm md:text-base" />
                <span className="font-semibold text-white text-xs sm:text-sm md:text-base">
                  HYUNDAI
                </span>
              </div>

              <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
                <FaCarSide className="text-white text-xs sm:text-sm md:text-base" />
                <span className="font-semibold text-white text-xs sm:text-sm md:text-base">
                  DAEWOO
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;