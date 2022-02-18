import { Header } from "./Header";

export function Banner() {
  return (
    <div className="bg-primary h-[567px] relative">
      <Header />

      {/* <div className="bg-icon-home1 h-[200px] sm:hidden md:block w-[200px] bg-no-repeat absolute -left-[100px] top-[250px]">
      </div> */}

      <div className="flex flex-col justify-center items-center gap-6 pt-8">
        <h1 className="text-5xl w-64  font-bold text-center">
          Find the best <span className="text-primary"> talent </span>
        </h1>

        <p className="w-64 h-7 overflow-x-auto">
          Finding the right people and building high performing teams can be
          hard. Most companies aren’t tapping into the abundance of global
          talent. We’re about to change that.
        </p>
      </div>
      <div className="bg-icon-home2 h-[106px] w-[360px] bg-no-repeat
      absolute -bottom-[6px] left-image-center"></div>


      {/* <div className="flex h-full items-center justify-evenly">
        <h1 className="uppercase w-[635px]  h-[200px] text-8xl ">
          Find the best <span className="text-primary"> talent </span>
        </h1>

        <div className="flex flex-col items-center justify-center w-[445px]">
          <p className="">-------</p>
          <p className="">
            Finding the right people and building high performing teams can be
            hard. Most companies aren’t tapping into the abundance of global
            talent. We’re about to change that.
          </p>
        </div>
      </div> */}
    </div>
  );
}
