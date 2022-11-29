import Presenter from "./presenter02";
// container 부분
export default function Container() {
  return (
    <>
      {Presenter({ child: "철수", age: 13 })}
      {/* <Presenter child="철수" age={13} /> */}
    </>
  );
}
