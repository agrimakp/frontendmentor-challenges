import { useState } from "react";
import { calculateLogic } from "../calculateLogic";
import { Button } from "./Button";

export function Calculator() {
  const [inputExpression, setInputExpression] = useState("");

  // triggers clicking = button
  const calculate = () => {
    const result = calculateLogic(inputExpression);
    setInputExpression(result.toString());
  };

  const reset = () => {
    setInputExpression("");
  };
  const backspace = () => {
    setInputExpression((old) => old.slice(0, old.length - 1));
  };

  const onButtonPress = (button: string) => {
    if (
      inputExpression.length > 0 &&
      // check if end of inputExpression is an operator
      isNaN(+inputExpression[inputExpression.length - 1]) &&
      // check if button pressed is an operator
      isNaN(+button)
    ) {
      // for cases like `3+3+-`
      console.warn("Malformed Expression");
    } else {
      setInputExpression((input) => input + button);
    }
  };

  return (
    <>
      <div className="bg-tertiary rounded-lg p-5 text-right">
        <span className="text-main" id="inputDisplay">{inputExpression || 0}</span>
      </div>
      <div
        className="
          bg-secondary
          mt-6
          rounded-lg
          py-5
          flex flex-wrap
          gap-3
          items-center
          justify-center
          text-blue-darkGrayish
        "
      >
        <Button
          title="7"
          onClick={() => {
            onButtonPress("7");
          }}
        />
        <Button
          title="8"
          onClick={() => {
            onButtonPress("8");
          }}
        />
        <Button
          title="9"
          onClick={() => {
            onButtonPress("9");
          }}
        />
        <Button
          title="DEL"
          onClick={backspace}
          className="bg-muted border-0 border-b-4
          border-muted text-[16px] text-white"
        />

        <Button
          title="4"
          onClick={() => {
            onButtonPress("4");
          }}
        />
        <Button
          title="5"
          onClick={() => {
            onButtonPress("5");
          }}
        />
        <Button
          title="6"
          onClick={() => {
            onButtonPress("6");
          }}
        />
        <Button
          title="+"
          onClick={() => {
            onButtonPress("+");
          }}
        />

        <Button
          title="1"
          onClick={() => {
            onButtonPress("1");
          }}
        />
        <Button
          title="2"
          onClick={() => {
            onButtonPress("2");
          }}
        />
        <Button
          title="3"
          onClick={() => {
            onButtonPress("3");
          }}
        />
        <Button
          title="-"
          onClick={() => {
            onButtonPress("-");
          }}
        />

        <Button
          title="."
          onClick={() => {
            onButtonPress(".");
          }}
        />
        <Button
          title="0"
          onClick={() => {
            onButtonPress("0");
          }}
        />
        <Button
          title="/"
          onClick={() => {
            onButtonPress("/");
          }}
        />
        <Button
          title="x"
          onClick={() => {
            onButtonPress("x");
          }}
        />

        <Button
          title="RESET"
          onClick={reset}
          className="bg-muted
            border-0 border-b-4 border-muted text-[16px] text-white w-[140px]"
        />

        <Button
          title="="
          onClick={calculate}
          className="bg-due
            border-0 border-b-4 border-due
            w-[140px] text-[16px] text-tertiary"
        />
      </div>
    </>
  );
}
