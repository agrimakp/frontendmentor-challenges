import { InputBox } from "./InputBox";
import dollarIcon from "../images/icon-dollar.svg";
import personIcon from "../images/icon-person.svg";
import { Button } from "./Button";
import { DisplayComponent } from "./DisplayComponent";

export function TipCalculator() {
  return (
    <div className="bg-white border rounded-2xl p-7 flex gap-8">
      <div className="w-1/2">
        <div className="mb-4">
          <InputBox name="Bill" icon={dollarIcon} placeHolder="0" />
        </div>
        <div className="mb-4 flex flex-wrap justify-between gap-y-4">
          <label
            className="block text-cyan-verydark text-sm font-bold w-full"
            htmlFor="Bill"
          >
            Select Tip %
          </label>
          <Button title="5%" dataValue={5} />
          <Button title="10%" dataValue={10} />
          <Button title="15%" dataValue={15} />
          <Button title="25%" dataValue={25} />
          <Button title="50%" dataValue={50} />
          <Button
            title="Custom"
            dataValue={5}
            className="bg-cyan-lightgray
            hover:bg-cyan-lightgrayish
            hover:text-cyan-verydark
            text-cyan-verydark"
          />
        </div>
        <div className="mb-4">
          <InputBox name="Number of people" icon={personIcon} placeHolder="0" />
        </div>
      </div>
      <div className="bg-cyan-verydark border rounded-xl p-7 w-1/2 font-bold">
        <DisplayComponent title="Tip Amount" subTitle="/ person" price={0} />
        <DisplayComponent title="Total" subTitle="/ person" price={0} />

        <Button
          title="RESET"
          className="bg-cyan-strong
          w-full
          hover:bg-cyan-lightgrayish
          hover:text-white  mt-10"
        />
      </div>
    </div>
  );
}
