import { SearchBar } from "./SearchBar";
import { Filter } from "./Filter";

export const CarDisplay = () => {
  return (
    <section className="flex flex-col gap-4 border">
      <div>
        <h1 className="text-3xl font-medium mb-2">Our Vehicles</h1>
        <p className="text-gray-500">Search for cars you might like</p>
      </div>

      <div className="flex justify-between items-center gap-4">
        <SearchBar />
        <div className="flex gap-4">
          <Filter />
          <Filter />
        </div>
      </div>
      {/* showcase vehicles */}
      <div className="grid grid-cols-4 gap-8">
        <div className="w-[275px] h-[200px] bg-blue-200"></div>
        <div className="w-[275px] h-[200px] bg-blue-200"></div>
        <div className="w-[275px] h-[200px] bg-blue-200"></div>
        <div className="w-[275px] h-[200px] bg-blue-200"></div>
        <div className="w-[275px] h-[200px] bg-blue-200"></div>
      </div>
    </section>
  );
};
