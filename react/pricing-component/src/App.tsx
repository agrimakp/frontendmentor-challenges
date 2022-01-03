import { PricingComponent } from "./components/PricingComponent";

function App() {
  return (
    <div
      className="font-body
    text-[14px] text-blue-grayish
    h-screen
    flex
    text-center
    justify-center
    bg-pattern bg-no-repeat bg-gray-50
    lg:bg-contain
    bg-left-top"
    >
      <div
        className=" h-[200px]
        w-[325px]
        md:w-[600px]
        bg-pattern-circles bg-no-repeat bg-center
        py-10
        m-8"
      >
        <div className="h-40">
          <h1 className="text-[21px] font-bold text-blue-darkDesaturated m-2">
            Simple, traffic-based pricing
          </h1>
          <p className="px-14 tracking-wider">
            Sign-up for our 30-day trial. No credit card required.
          </p>
        </div>
        <PricingComponent />
      </div>
    </div>
  );
}

export default App;
