import "./App.css";
import SignUp from "./components/SignUp";
import GetNotified from "./components/GetNotified";
import Carousel from "./components/Carousel";

const mainBg = {
  background:
    "radial-gradient(92.19% 89.74% at 0% 91.27%, #1FA911 17.21%, #2F15D0 50.58%, rgb(0, 0, 0) 100%)",
};

function App() {
  return (
    <div className="flex bg-black text-white">
      <div className="py-[62px]">
        <div className="grid grid-cols-10 md:pl-[62px] p-4">
          <div className="md:col-span-5 col-span-full">
            <GetNotified />
          </div>
          <div className="md:col-span-5 col-span-full">
            <Carousel />
          </div>
        </div>
      </div>
      <div className="md:flex hidden">
        <SignUp />
      </div>
    </div>
  );
}

export default App;
