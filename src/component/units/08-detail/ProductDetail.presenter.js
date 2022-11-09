import { Seller, Detail } from "./ProductDetail.styles.js";
import { useRouter } from "next/router";

export default function ProductDetailUI(props) {
  const router = useRouter();
  return (
    <div>
      <Seller>
        {/* 판매자: {props.data ? props.data.fetchProduct.seller : "로딩중입니다."} */}
        판매자: {props.data?.fetchProduct.seller}
      </Seller>
      <div>
        {/* 상품명: {props.data ? props.data.fetchProduct.name : "로딩중입니다."} */}
        상품명: {props.data?.fetchProduct.name}
      </div>
      <Detail>
        {/* 상품내용:{props.data ? props.data.fetchProduct.detail : "로딩중입니다."} */}
        상품내용: {props.data?.fetchProduct.detail}
      </Detail>
      <div>
        {/* 상품가격: {props.data ? props.data.fetchProduct.price : "로딩중입니다."} */}
        상품가격: {props.data?.fetchProduct.price}
      </div>
      <button onClick={props.c_edit}>수정하기</button>
      <button>목록으로</button>
    </div>
  );
}
