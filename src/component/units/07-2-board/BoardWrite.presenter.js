import { BlueButton } from "./BoardWrite.styles";
export default function BoardWriteUI(props) {
  return (
    <>
      작성자:
      <input type="text" onChange={props.writer}></input>
      제목:
      <input type="text" onChange={props.title}></input>
      내용:
      <input type="text" onChange={props.contents}></input>
      <BlueButton onClick={props.click} cc={props.active}>
        GRAPHQL-API 요청하기
      </BlueButton>
    </>
  );
}
