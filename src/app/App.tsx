import Main from "./components/Main";
import MobileMain from "./components/MobileMain";
import MobileProfile from "./components/MobileProfile";
import Profile from "./components/Profile";

export default function App() {
  return (
    <>
      {/* Desktop Version */}
      <div className="hidden lg:flex bg-white flex-col items-center justify-center px-[32px] py-[72px] relative min-h-full">
        <div className="flex items-start gap-[24px] relative w-[1140px]">
          <Main />
          <div className="flex flex-col gap-[16px] items-start pb-[32px] sticky top-[72px] w-[267px]">
            <Profile />
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="lg:hidden bg-white flex flex-col items-start px-[32px] py-[32px] relative min-h-full">
        <div className="flex flex-col items-start relative w-full max-w-[360px] mx-auto">
          <MobileMain />
          <MobileProfile />
        </div>
      </div>
    </>
  );
}