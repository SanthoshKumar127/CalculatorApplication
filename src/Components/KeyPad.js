import React from "react";
import Button from "./Button";

function KeyPad({ handleClickEvent }) {
  return (
    <div>
      <table>
        <tr>
          <Button name="AC" handleClick={handleClickEvent} />
          <Button name="+/-" handleClick={handleClickEvent} />
          <Button name="%" handleClick={handleClickEvent} />
          <Button name="/" handleClick={handleClickEvent} />
        </tr>
        <tr>
          <Button name="7" handleClick={handleClickEvent} />
          <Button name="8" handleClick={handleClickEvent} />
          <Button name="9" handleClick={handleClickEvent} />
          <Button name="*" handleClick={handleClickEvent} />
        </tr>
        <tr>
          <Button name="4" handleClick={handleClickEvent} />
          <Button name="5" handleClick={handleClickEvent} />
          <Button name="6" handleClick={handleClickEvent} />
          <Button name="-" handleClick={handleClickEvent} />
        </tr>
        <tr>
          <Button name="1" handleClick={handleClickEvent} />
          <Button name="2" handleClick={handleClickEvent} />
          <Button name="3" handleClick={handleClickEvent} />
          <Button name="+" handleClick={handleClickEvent} />
        </tr>
        <tr>
          <Button name="0" colSpan={2} handleClick={handleClickEvent} />
          <Button name="." handleClick={handleClickEvent} />
          <Button name="=" handleClick={handleClickEvent} />
        </tr>
      </table>
    </div>
  );
}

export default KeyPad;
