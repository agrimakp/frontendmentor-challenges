export function TipCalculator() {
  return (
    <div className="bg-white border rounded-2xl p-7 flex gap-8">
      <div className="w-1/2">
        <div className="mb-4">
          <label
            className="block text-cyan-verydark text-sm font-bold mb-2"
            htmlFor="Bill"
          >
            Bill
          </label>
          <div
            className="
                relative
                hover:border
                hover:border-solid
                hover:border-green-500
                hover:rounded
                border border-solid border-transparent
                before:absolute
                before:top-[6px]
                before:left-2
                before:content-['$']
              "
          >
            <input
              className="
                  appearance-none
                  bg-cyan-lightgray
                  rounded
                  w-full
                  py-2
                  px-3
                  text-right text-gray-700
                  leading-tight
                  focus:outline-none focus:shadow-outline
                  pl-10
                  block
                "
              id="Bill"
              type="number"
              placeholder="0"
              // onChange="changeBillInput"
            />
          </div>
        </div>
        <div className="mb-4 flex flex-wrap justify-between gap-y-4">
          <label
            className="block text-cyan-verydark text-sm font-bold w-full"
            htmlFor="Bill"
          >
            Select Tip %
          </label>
          <button
            // onClick="selectTip"
            data-value="5"
            className="
                tip
                bg-cyan-verydark
                hover:bg-cyan-lightgrayish hover:text-cyan-verydark
                text-white
                min-w-[30%]
                font-bold
                py-2
                px-4
                rounded
                focus:outline-none focus:shadow-outline
              "
            type="button"
          >
            5%
          </button>
          <button
            // onClick="selectTip"
            data-value="10"
            className="
                tip
                bg-cyan-verydark
                hover:bg-cyan-lightgrayish hover:text-cyan-verydark
                text-white
                min-w-[30%]
                font-bold
                py-2
                px-4
                rounded
                focus:outline-none focus:shadow-outline
              "
            type="button"
          >
            10%
          </button>
          <button
            // onClick="selectTip"
            data-value="15"
            className="
                tip
                bg-cyan-verydark
                hover:bg-cyan-lightgrayish hover:text-cyan-verydark
                text-white
                min-w-[30%]
                font-bold
                py-2
                px-4
                rounded
                focus:outline-none focus:shadow-outline
              "
            type="button"
          >
            15%
          </button>
          <button
            // onClick="selectTip"
            data-value="25"
            className="
                tip
                bg-cyan-verydark
                hover:bg-cyan-lightgrayish hover:text-cyan-verydark
                text-white
                min-w-[30%]
                font-bold
                py-2
                px-4
                rounded
                focus:outline-none focus:shadow-outline
              "
            type="button"
          >
            25%
          </button>
          <button
            // onClick="selectTip"
            data-value="50"
            className="
                tip
                bg-cyan-verydark
                hover:bg-cyan-lightgrayish hover:text-cyan-verydark
                text-white
                min-w-[30%]
                font-bold
                py-2
                px-4
                rounded
                focus:outline-none focus:shadow-outline
              "
            type="button"
          >
            50%
          </button>
          <button
            // onClick="selectTip"
            data-value="5"
            className="
                tip
                bg-cyan-lightgray
                hover:bg-cyan-lightgrayish hover:text-cyan-verydark
                text-cyan-verydark
                min-w-[30%]
                font-bold
                py-2
                px-4
                rounded
                focus:outline-none focus:shadow-outline
              "
            type="button"
          >
            Custom
          </button>
        </div>
        <div className="mb-4">
          <label
            className="block text-cyan-verydark text-sm font-bold mb-2"
            htmlFor="Bill"
          >
            Number of People
          </label>
          <div
            className="
                relative
                hover:border
                hover:border-solid
                hover:border-red-400
                hover:rounded
                border border-solid border-transparent
                before:absolute
                before:w-4
                before:h-4
                before:top-[6px]
                before:top-3
                before:left-2
                before:bg-icon-person
                before:bg-no-repeat
              "
          >
            <input
              className="
                  appearance-none
                  bg-cyan-lightgray
                  rounded
                  text-right
                  w-full
                  py-2
                  px-3
                  text-gray-700
                  leading-tight
                  focus:outline-none focus:shadow-outline
                "
              id="People"
              type="number"
              placeholder="0"
              // onChange="changePeopleInput"
            />
          </div>
        </div>
      </div>
      <div className="bg-cyan-verydark border rounded-xl p-7 w-1/2 font-bold">
        <div className="flex justify-between">
          <div className="mb-7">
            <h4 className="text-white">Tip Amount</h4>
            <span className="text-cyan-darkgrayish">/ person</span>
          </div>
          <p className="text-cyan-strong text-4xl" id="tip">
            $0.00
          </p>
        </div>

        <div className="flex justify-between mb-10 font-bold">
          <div className="mb-7">
            <h4 className="text-white">Total</h4>
            <span className="text-cyan-darkgrayish">/ person</span>
          </div>
          <p className="text-cyan-strong text-4xl" id="total">
            $0.00
          </p>
        </div>
        <button
          className="
              bg-cyan-strong
              w-full
              hover:bg-cyan-lightgrayish
              text-white
              font-bold
              py-2
              px-4
              rounded
              focus:outline-none focus:shadow-outline
            "
          type="button"
          // onClick="reset"
        >
          RESET
        </button>
      </div>
    </div>
  );
}
