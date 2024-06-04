import { IoCarSportSharp } from "react-icons/io5";
import { Landing } from "@/components/Landing";
import { CarDisplay } from "@/components/CarDisplay";

const Home = () => {
  return (
    <main className="max-w-6xl mx-auto">
      <Landing />
      <CarDisplay />
    </main>
  );
};

export default Home;
