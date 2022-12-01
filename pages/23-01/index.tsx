export default function HOFPage() {
  const onClickButton = (aaa: any) => {
    console.log(aaa);
  };
  return (
    <>
      <button onClick={onClickButton(123)}>임의의 버튼</button>
    </>
  );
}
