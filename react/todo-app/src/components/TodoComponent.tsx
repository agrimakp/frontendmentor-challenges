import { Button } from "./Button";
import { InputBox } from "./InputBox";

export function TodoComponent() {
  return (
    <>
      <div
        className="
      bg-blue-desaturated
      p-3
      rounded-md
      flex flex-row
      items-center
      gap-2
    "
      >
        <span
          className="
        h-6
        w-6
        bg-blue-desaturated
        border border-blue-darkGrayish
        rounded-full
        inline-block
      "
        ></span>
        <InputBox />
      </div>
      <div className="rounded-md bg-blue-desaturated mt-4 lg:hidden">
        <ul className="w-full text-sm" id="list"></ul>
        <div className="flex justify-between p-4 text-sm">
          <p>
            <span id="itemsLeft"></span> items left
          </p>
          <button>Clear Completed</button>
        </div>
      </div>
      <div
        className="
          flex
          justify-center
          flex-row
          gap-4
          text-sm
          rounded-md
          bg-blue-desaturated
          mt-4
          p-4
          font-bold
          lg:justify-between
        "
      >
        <aside className="hidden lg:block ">
          <span id="itemsLeft"></span> items left
        </aside>
        <div className="flex gap-3">
          <Button title="All" className="text-white" />
          <Button title="Active" />
          <Button title="Completed" />
        </div>

        <Button className="hidden lg:block" title="Clear Completed" />
      </div>
      <div className="my-10 text-sm flex justify-center">
        <p>Drag and drop to reorder list</p>
      </div>
    </>
  );
}
