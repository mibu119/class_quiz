import { UseCountOn } from "../../src/component/commons/hooks/useCountUp";

export default function QuizPage() {
  const { onClickCountUp, count } = UseCountOn();

  return (
    <>
      <div>
        <p>지금의 카운트는 {count} 입니다!</p>
        <button onClick={onClickCountUp}>Count up!</button>
      </div>
    </>
  );
}
