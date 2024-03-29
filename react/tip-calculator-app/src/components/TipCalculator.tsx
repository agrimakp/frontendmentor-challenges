import { InputBox } from "./InputBox";
import dollarIcon from "../images/icon-dollar.svg";
import personIcon from "../images/icon-person.svg";
import { Button } from "./Button";
import { DisplayComponent } from "./DisplayComponent";
import { useState } from "react";
import React from "react";
import { CalculationsLogic } from "../CalculationsLogic";

export function TipCalculator() {
  const [bill, setBill] = useState(0);
  const [people, setPeople] = useState(0);
  const [tip, setTip] = useState(0);

  const changeBillInput = (e: any) => {
    setBill(+e.target.value);
  };

  const changePeopleInput = (e: any) => {
    setPeople(+e.target.value);
  };
  const result = CalculationsLogic(bill, people, tip);

  return (
    <div className="bg-white border rounded-2xl p-7 flex gap-8">
      <div className="w-1/2">
        <div className="mb-4">
          <InputBox
            name="Bill"
            icon={dollarIcon}
            placeHolder="0"
            value={bill}
            onChange={changeBillInput}
          />
        </div>
        <div className="mb-4 flex flex-wrap justify-between gap-y-4">
          <label
            className="block text-cyan-verydark text-sm font-bold w-full"
            htmlFor="Bill"
          >
            Select Tip %
          </label>
          <Button
            title="5%"
            onClick={() => {
              setTip(5);
            }}
          />
          <Button
            title="10%"
            onClick={() => {
              setTip(10);
            }}
          />
          <Button
            title="15%"
            onClick={() => {
              setTip(15);
            }}
          />
          <Button
            title="25%"
            onClick={() => {
              setTip(25);
            }}
          />
          <Button
            title="50%"
            onClick={() => {
              setTip(50);
            }}
          />
          <Button
            title="Custom"
            className="bg-cyan-lightgray
            hover:bg-cyan-lightgrayish
            hover:text-cyan-verydark
            text-cyan-verydark"
          />
        </div>
        <div className="mb-4">
          <InputBox
            name="Number of people"
            icon={personIcon}
            placeHolder="0"
            value={people}
            onChange={changePeopleInput}
          />
        </div>
      </div>
      <div className="bg-cyan-verydark border rounded-xl p-7 w-1/2 font-bold">
        <DisplayComponent title="Tip Amount" subTitle="/ person" price={result.tipPerPerson} />
        <DisplayComponent title="Total" subTitle="/ person" price={result.billPerPerson} />

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
