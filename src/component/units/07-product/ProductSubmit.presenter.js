import { RedInput, BlueButton } from "./ProductSubmit.styles";

export default function ProductSubmitUI(props) {
  return (
    <div>
      <div>
        판매자:
        <RedInput onChange={props.seller} type="text"></RedInput>
      </div>
      <div>
        상품명:
        <RedInput onChange={props.name} type="text"></RedInput>
      </div>
      <div>
        상품내용:
        <input onChange={props.detail} type="text"></input>
      </div>
      <div>
        상품가격:
        <input onChange={props.price} type="text"></input>
      </div>
      <BlueButton isTrue={props.true} onClick={props.click}>
        상품 등록
      </BlueButton>
    </div>
  );
}
