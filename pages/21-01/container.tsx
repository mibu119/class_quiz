import Presenter from "./presenter";
export default function Container() {
  return (
    <>
      {Presenter({ child: "철수" })};{/* <Presenter child="철수" /> */}
    </>
  );
}
