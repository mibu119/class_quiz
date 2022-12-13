import { useCallback, useMemo, useState } from "react";
import MemoizationChildPage from "./02-child";

export default function MemoizationParentPage() {
  console.log("부모 컴포넌트가 렌더링 되었습니다.");

  let countLet = 0;
  const [countState, setCountState] = useState(0);

  const onClickCountLet = useCallback(() => {
    console.log(countLet + 1); // 랜더링 되지 않음
    countLet += 1;
  }, []);

  const onClickCountState = useCallback(() => {
    console.log(countState + 1);
    setCountState((prev) => prev + 1);
  }, []);

  // useMemo로 함수 기억
  const onClickCountState2 = useMemo(() => {
    return () => {
      // console.log(countState + 1);
      setCountState((prev) => prev + 1);
    };
  }, []);

  return (
    <>
      <div>========================</div>
      <h1>저는 부모 컴포넌트입니다.</h1>

      <div>카운트(let): {countLet}</div>
      <button onClick={onClickCountLet}>카운트(let) +1 올리기</button>

      <div>카운트(state): {countState}</div>
      <button onClick={onClickCountState}>카운트(state) +1 올리기</button>

      <div>카운트(useMemoState)</div>
      <button onClick={onClickCountState2}>
        카운트(useMemoState) +1 올리기
      </button>

      <div>state 변경 함수 직접 JSX에 작성</div>
      {/* state 변경 함수 직접 작성하기 */}
      <button
        onClick={useCallback(() => {
          console.log(countState + 1);
          setCountState((prev) => prev + 1);
        }, [])}
      >
        카운트(useCallbackState) +1 올리기
      </button>
      <div>========================</div>
      <MemoizationChildPage />
    </>
  );
}
