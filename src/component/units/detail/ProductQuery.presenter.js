import { Seller, Detail } from "./ProductQuery.styles.js";

export default function ProductQueryUI(props) {
  return (
    <div>
      <Seller>
        판매자: {props.data ? data.fetchProduct.seller : "로딩중입니다."}
      </Seller>
      <div>상품명: {props.data ? data.fetchProduct.name : "로딩중입니다."}</div>
      <Detail>
        상품내용:{props.data ? data.fetchProduct.detail : "로딩중입니다."}
      </Detail>
      <div>
        상품가격: {props.data ? data.fetchProduct.price : "로딩중입니다."}
      </div>
    </div>
  );
}
