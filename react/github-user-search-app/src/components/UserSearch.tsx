import { useState } from "react";
import { Button } from "./Button";

export function UserSearch(props: any) {
  console.log(props);
  const [userName, setUserName] = useState("");

  const changeName = (e: any) => {
    setUserName(e.target.value);
  };
  return (
    //   Search GitHub username...
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
        name="userName"
        value={userName}
        onChange={changeName}
        placeholder="Search GitHub username..."
      />
      <Button
        onClick={() => {
          props.onSubmit(userName);
        }}
      />
    </div>
  );
}
