import Image from "next/image";

export const Landing = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 h-full md:h-[50vh]">
      <div className="px-4 py-4 md:py-8 flex flex-col gap-4 md:gap-8 h-full">
        <div className="text-3xl md:text-4xl lg:text-5xl font-bold w-fit">
          <h1 className="">
            Discover, book, and rent a car simple, quick and super easy!
          </h1>
        </div>
        <p className="text-justify text-base md:text-lg text-gray-500 font-light">
          Streamline your car rental experience with our effortless booking
          process. Enjoy a wide selection of well-maintained vehicles to suit
          every need and budget. Our dedicated customer support ensures a
          hassle-free journey from start to finish.
        </p>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-full w-fit">
          Explore Cars
        </button>
      </div>
      <div className="flex justify-end items-end w-full h-full relative overflow-hidden">
        <div className="relative w-[100%] md:h-full h-[500px] z-0">
          <Image
            src="/car-landing.png"
            alt="hero"
            fill
            className="object-contain"
          />
        </div>
        <div className="absolute -right-1/4 bg-repeat-round -z-10 w-full md:h-[50vh] h-[500px]">
          <Image src="/car-bg.png" alt="hero" fill className="object-contain" />
        </div>
      </div>
    </section>
  );
};
