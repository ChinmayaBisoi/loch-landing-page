import "./App.css";
import SignUp from "./components/SignUp";
import InfoCard from "./components/InfoCard";
import Carousel from "./components/Carousel";
import Testimonials from "./components/Testimonials";
import AutoScrollCard1 from "./components/AutoScrollCard1";
import AutoScrollCard2 from "./components/AutoScrollCard2";
import AutoScrollCard3 from "./components/AutoScrollCard3";
import { useState } from "react";

const mainBg = {
  background:
    "radial-gradient(92.19% 89.74% at 0% 91.27%, #1FA911 17.21%, #2F15D0 50.58%, rgb(0, 0, 0) 100%)",
};

const autoScrollItems = [
  () => <AutoScrollCard1 />,
  () => <AutoScrollCard2 />,
  () => <AutoScrollCard3 />,
];

function App() {
  const [showSignup, setShowSignup] = useState(false);
  function showSignupForMob() {
    setShowSignup(true);
  }

  function closeSignupForMob() {
    setShowSignup(false);
  }
  return (
    <div className="max-h-screen h-full w-full isolate text-white">
      <div
        style={{
          background:
            "radial-gradient(92.19% 89.74% at 0% 91.27%, #1FA911 17.21%, #2F15D0 50.58%, rgb(0, 0, 0) 100%)",
        }}
        className="min-w-0 min-h-0 flex h-full flex-grow relative"
      >
        <main className="grow p-4 md:p-0 scroll-pt-4 overflow-auto lg:pr-[365px] relative">
          <button
            onClick={showSignupForMob}
            className="fixed lg:hidden right-5 md:top-4 shadow-xl border-2 border-black bg-white text-black px-3 pb-2 pt-1 font-semibold hover:bg-gray-200 rounded-md"
          >
            SignUp
          </button>
          {showSignup && (
            <div className="fixed top-0 left-0 z-50 h-screen w-screen bg-white flex justify-center items-center">
              <div className="relative">
                <div
                  className="text-black fixed right-5 top-4 p-2 px-3 font-semibold cursor-pointer hover:bg-gray-200 rounded-lg"
                  onClick={closeSignupForMob}
                >
                  Close
                </div>
                <SignUp />
              </div>
            </div>
          )}
          <div className="md:py-[62px] md:pl-[62px] md:pr-0">
            <div className="grid md:grid-cols-10 grid-cols-1 gap-12 md:mb-[72px] mb-12">
              <div className="md:col-span-6 col-span-full">
                <InfoCard
                  showLetterBorder
                  imgSrc="/bell1.svg"
                  title="Get notified when a highly correlated whale makes a move"
                  subtitle="Find out when a certain whale moves more than any preset amount on-chain
                or when a dormant whale you care about becomes active."
                />
              </div>
              <div className="md:col-span-4 col-span-full md:block flex justify-center max-w-[400px]">
                <div className="pt-[6px] relative overflow-hidden">
                  <Carousel autoScroll items={autoScrollItems} />
                </div>
              </div>
            </div>
            <div className="md:pr-[62px]">
              <div className="grid md:grid-cols-2 grid-cols-1 gap-y-12 md:mb-[22px] mb-12 ">
                <img
                  src="cohorts1.svg"
                  className="w-full h-auto rounded-lg md:order-1 order-2"
                />
                <div className="md:pt-[17px] order-1 md:order-2">
                  <InfoCard
                    wrapperCss="text-right flex flex-col items-end md:ml-auto"
                    imgSrc="/eye.svg"
                    title="Watch what the whales are doing"
                    subtitle="All whales are not equal. Know exactly what the whales impacting YOUR portfolio are doing."
                  />
                </div>
              </div>
            </div>
            <div className="md:pr-[62px]">
              <Testimonials />
            </div>
          </div>
        </main>
        <div className="lg:flex bg-white hidden fixed h-screen items-center justify-center right-0">
          <SignUp />
        </div>
      </div>
    </div>
  );
}

export default App;
