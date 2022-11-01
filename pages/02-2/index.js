import { useState } from "react";

export default function CounterState() {
  function onClickCountUp() {
    let countUp = Number(document.getElementById("num").innerText) + 1;
    document.getElementById("num").innerText = countUp;
  }

  const [count, setCount] = useState(0);
  function onClickStateUp() {
    setCount(count + 1);
  }

  return (
    <>
      <div id="num">0</div>
      <button onClick={onClickCountUp}>카운트증가</button>
      <div id="stateNum">{count}</div>
      <button onClick={onClickStateUp}>카운트증가</button>
    </>
  );
}
