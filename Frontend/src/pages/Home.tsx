import Footer from "../components/Footer";
import Lottie from "lottie-react";
import animationData from "../../public/Animation - 1707149762386.json";
import animationData2 from "../../public/Animationline- 1707152140943.json";

export default function Home() {
  return (
    <div className="hero min-h-screen bg-base-200 ">
      <div className="mt-40">
        <div className="hero-content flex-col lg:flex-row-reverse mt-10">
          <Lottie
            animationData={animationData}
            className="bg-gray-800 rounded-full shadow-xl "
          />
          <div>
            <div className="text-5xl font-bold text-black dark:text-white ">
              <div className="flex justify-left ">
                <b className="pr-2"> Welcome to </b>
                <div className="relative  ">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur opacity-75 "></div>
                  <b className="bg-clip-text dark:brightness-150  text-transparent bg-gradient-to-r  from-pink-600 to-purple-800    ">
                    OrganizeSphere
                  </b>
                </div>
                <b className="pl-2">! </b>
              </div>
            </div>
            <p className="py-6 text-black dark:text-white">
              Are you tired of juggling tasks, appointments, and deadlines? Look
              no further! OrganzieSphere is your ultimate companion for seamless
              organization.
            </p>
            <a href="/sign-up" className="btn btn-primary ">
              Get Started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-4 h-4">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="mt-40 hero-content flex-col lg:flex-row-reverse">
          <div>
            <Lottie animationData={animationData2} />
          </div>
          <div>
            <span className="text-5xl font-bold text-black dark:text-white ">
              What Makes OrganzieSphere Special ?
            </span>
            <div className="p-10 mt-10">
              <span className="text-xl font-bold text-black dark:text-white mr-10 ">
                Intuitive Interface
              </span>
              <h1 className="p-5">
                Our sleek design ensures that you can effortlessly navigate
                through your tasks, events, and notes. No more cluttered screens
              </h1>
              <span className="text-xl font-bold text-black dark:text-white ">
                Smart Reminders
              </span>
              <h1 className="p-5">
                Never miss an important meeting or birthday again.
                OrganzieSphere sends timely reminders straight to your device.
              </h1>
              <span className="text-xl font-bold text-black dark:text-white ">
                Customizable Categories
              </span>
              <h1 className="p-5">
                Whether it's work, personal, or fitness goals, create custom
                categories to keep everything neatly organized.
              </h1>
              <span className="text-xl font-bold text-black dark:text-white ">
                Collaborate Effortlessly
              </span>
              <h1 className="p-5">
                Share lists, schedules, and notes with family, friends, or
                colleagues. Teamwork made simple!
              </h1>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}
