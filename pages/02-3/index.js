import { useState } from "react";

export default function CreateCertificationNum() {
  function onClickCreate() {
    let create = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
    document.getElementById("num").innerText = create;
  }

  const [number, setNum] = useState("000000");
  function onClickCreateState() {
    setNum(String(Math.floor(Math.random() * 1000000)).padStart(6, "0"));
  }
  return (
    <>
      <div id="num">000000</div>
      <button onClick={onClickCreate}>인증번호전송</button>
      <div id="num2">{number}</div>
      <button onClick={onClickCreateState}>인증번호전송</button>
    </>
  );
}
