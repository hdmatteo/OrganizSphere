import Calender from "../components/Calender";
import Quote from "../components/Quote";
import Todos from "../components/Todos";



export default function Organzier() {
  return (
    <div className="min-h-screen text-gray-800 font-sans font-bold bg-Mountains bg-no-repeat bg-cover bg-center p-2 ">
  
      <div className="p-10 mt-10">
        <main className="grid flex-auto  sm:grid-cols-3 grid-rows-14 gap-8  text-gray-800 dark:text-white ">
          <div className=" col-span-2   backdrop-blur-md p-4 shadow-md rounded-lg ">
           <b className="bg-base-200 rounded-full pl-2 pr-2 pt-1 pb-1 shadow-md">Calender</b> 
            <Calender></Calender>
          </div>
          <div className="  col-span-1 row-auto backdrop-blur-md p-4 shadow-md rounded-lg   ">
          <b className="bg-base-200 rounded-full pl-2 pr-2 pt-1 pb-1 shadow-md">Todos</b>
            <Todos></Todos>
          </div>
          <div className=" col-span-1  backdrop-blur-md p-4 shadow-md rounded-lg ">
          <b className="bg-base-200 rounded-full pl-2 pr-2 pt-1 pb-1 shadow-md">Qoutes</b>
            <Quote></Quote>
          </div>
          <div className=" col-span-1  backdrop-blur-md p-4 shadow-md rounded-lg ">
          <b className="bg-base-200 rounded-full pl-2 pr-2 pt-1 pb-1 shadow-md">Time Tracking</b>
          </div>
        </main>
      </div>
    </div>
  );
}
