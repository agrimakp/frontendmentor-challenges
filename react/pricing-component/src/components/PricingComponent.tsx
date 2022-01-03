export function PricingComponent() {
  return (
    <>
      <div
        className="
          bg-white-neutral
          border
          rounded-md
          items-center
          py-8
          md:flex md:flex-wrap md:justify-between md:px-12
        "
      >
        <p className="text-md font-bold order-1">
          <span id="pageViews">100</span>K PAGEVIEWS
        </p>
        <div className="rounded-md h-[20px] p-[7px] m-4 md:mx-0 md:w-full order-3">
          <input
            type="range"
            min="1"
            max="100"
            value="1"
            // onchange="changemultiplier(event)"
            className="
              w-full
              h-2
              border-0
              rounded-md
              bg-cyan-soft
              cursor-pointer
              appearance-none
            "
            id="myRange"
          />
        </div>
        <div className="flex justify-center items-center my-8 order-2">
          <p className="text-[30px] font-bold text-blue-darkDesaturated">
            $<span id="price">16.00</span>
          </p>
          <span> / month</span>
        </div>
        <div className="order-4 md:w-2"></div>
        <div className="flex flex-row justify-center gap-2 my-8 text-[12px] order-5">
          <p>Monthly Billing</p>
          <input
            type="checkbox"
            // onchange="changeBillingCycle(event)"
            id="switch"
            hidden
          />
          <label htmlFor="switch">Toggle</label>
          <p>Yearly Billing</p>
          <div className="text-red-light bg-red-lightGrayish rounded-xl p-0.5 px-1.5">
            -25% <span className="hidden md:inline">discount</span>
          </div>
        </div>
      </div>
      <div
        className="
          bg-white-neutral
          border
          rounded-md
          md:px-16
          py-8
          md:flex md:flex-row md:justify-between md:gap-6
          items-center
          justify-center
        "
      >
        <ul className="md:text-left">
          <li className="mb-2">&nbsp; websites</li>
          <li className="mb-2">&nbsp; 100% data ownership</li>
          <li className="mb-2">&nbsp; Email reports</li>
        </ul>

        <button
          className="
            bg-blue-darkDesaturated
            p-4
            rounded-full
            mt-10
            md:mt-0
            px-14
            text-white-neutral
          "
        >
          Start my trial
        </button>
      </div>
    </>
  );
}
