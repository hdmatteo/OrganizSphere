import Calender from "./components/Calender";
import Quote from "./components/Quote";
import Todos from "./components/Todos";

export default function Organzier() {
  return (
    <div className="min-h-screen text-gray-800 font-sans font-bold bg-Mountains bg-no-repeat bg-cover bg-center">
      <div className="p-10">
        <main className="grid flex-auto  sm:grid-cols-3 grid-rows-14 gap-8 ">
          <div className=" col-span-2   backdrop-blur-md p-4 shadow-md rounded-lg ">
            Calender
            <Calender></Calender>
          </div>
          <div className="  col-span-1 row-auto backdrop-blur-md p-4 shadow-md rounded-lg ">
            Todos
            <Todos></Todos>
          </div>
          <div className=" col-span-1  backdrop-blur-md p-4 shadow-md rounded-lg ">
            Quotes
            <Quote></Quote>
          </div>
          <div className=" col-span-1  backdrop-blur-md p-4 shadow-md rounded-lg ">
            Time Tracking
          </div>
        </main>
      </div>
    </div>
  );
}
