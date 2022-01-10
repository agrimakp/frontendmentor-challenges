import { Button } from "./Button";

export function SearchBox() {
  return (
    <div
      className="bg-blue-dark
    text-sm
    rounded-lg
    pl-4
    flex
    justify-between"
    >
      <input
        className="bg-blue-dark
        text-sm
        p-3
        w-full rounded-lg
        bg-icon-search
        bg-[length:15px_15px]
        bg-no-repeat
        bg-left pl-9
        outline-none"
        type="text"
        id="dd"
        name="dd"
        placeholder="Search GitHub username..."
      />
      <Button />
    </div>
  );
}
