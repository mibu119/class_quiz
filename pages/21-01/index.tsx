import { useState } from "react";

// 3번
["철수", "영희", "훈이", "맹구"].map((kids, i) => {
  console.log(`${kids}는 ${i}번째 칸에 들어있습니다.`);
});

export default function StatePage() {
  // 4번
  const [state, setState] = useState(0);
  function onClickStateUp() {
    setState((qwer) => qwer + 1);
  }

  return (
    <>
      <div>{state}</div>
      <button onClick={onClickStateUp}></button>
    </>
  );
}
