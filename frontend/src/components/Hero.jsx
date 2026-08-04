import {
  FaCarSide
} from "react-icons/fa";

function Hero() {

  return (

    <section className="relative h-screen">

      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover"
      >

        <source
          src="./src/Video/video.mp4"
          type="video/mp4"
        />

      </video>

      <div className="absolute inset-0 bg-black/60">

        <div className="h-full flex flex-col justify-center items-center text-white">

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">

            Adomako Agyenkwa

          </h1>

          <p className="mt-4 text-xl">
            Genuine Automobile Parts
          </p>

        </div>

        {/* Partner Brands */}

<div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm py-3">

  <div className="max-w-7xl mx-auto px-2 sm:px-4">

    <p className="text-center text-gray-300 text-[10px] sm:text-xs uppercase tracking-widest mb-2">

      Trusted Automobile Brands

    </p>

    <div className="flex justify-center items-center gap-3 sm:gap-5 md:gap-8 overflow-x-auto whitespace-nowrap scrollbar-hide">

      <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
        <FaCarSide className="text-white text-xs sm:text-sm md:text-base" />
        <span className="font-semibold text-white text-xs sm:text-sm md:text-base">
          Honda
        </span>
      </div>

      <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
        <FaCarSide className="text-white text-xs sm:text-sm md:text-base" />
        <span className="font-semibold text-white text-xs sm:text-sm md:text-base">
          Toyota
        </span>
      </div>

      <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
        <FaCarSide className="text-white text-xs sm:text-sm md:text-base" />
        <span className="font-semibold text-white text-xs sm:text-sm md:text-base">
          SsangYong
        </span>
      </div>

      <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
        <FaCarSide className="text-white text-xs sm:text-sm md:text-base" />
        <span className="font-semibold text-white text-xs sm:text-sm md:text-base">
          Volvo
        </span>
      </div>

      <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
        <FaCarSide className="text-white text-xs sm:text-sm md:text-base" />
        <span className="font-semibold text-white text-xs sm:text-sm md:text-base">
          Mercedes-Benz
        </span>
      </div>

    </div>

  </div>

</div>

      </div>

    </section>

  )

}

export default Hero;