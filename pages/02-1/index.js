import { useState } from "react";
export default function Hello() {
  function onClickNiceToMeet() {
    let changeButton = document.getElementById("helloButton");

    changeButton.innerText = "반갑습니다";
  }

  const [event, setEvent] = useState("안녕하세요");

  function onClickTextChange() {
    setEvent("반갑습니다");
  }
  return (
    <>
      <button id="helloButton" onClick={onClickNiceToMeet}>
        안녕하세요
      </button>
      <button onClick={onClickTextChange}>{event}</button>
    </>
  );
}
