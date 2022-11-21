import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ComponentLifeCycle() {
  const [isChange, setIsChange] = useState(false);
  const router = useRouter();

  const onClickChange = () => {
    console.log(isChange);
    setIsChange((prev) => !prev);
  };

  useEffect(() => {
    alert("Rendered!");
    console.log("render되면 뜬다!");
  }, []); // 새로고침하면 뜸

  useEffect(() => {
    alert("Changed!");
    console.log("render되고 나서 change가 되면 뜬다!");
  }, [isChange]);

  useEffect(() => {
    return () => {
      alert("Bye!");
      console.log("다른 창으로 옮기면 뜬다!");
    };
  }, []); // 빈배열을 넣지 않으면 전체적으로 모두 영향을 받아버림.

  const onClickMove = () => {
    void router.push("/");
  };

  return (
    <>
      <button onClick={onClickChange}>변경</button>
      <button onClick={onClickMove}>이동</button>
    </>
  );
}
