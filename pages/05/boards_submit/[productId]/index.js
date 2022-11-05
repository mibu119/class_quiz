import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_PRODUCT = gql`
  query fetchProduct($productId: ID) {
    fetchProduct(productId: $productId) {
      seller
      name
      detail
      price
    }
  }
`;

export default function RoutedFetchPage() {
  const router = useRouter("");

  const { data } = useQuery(FETCH_PRODUCT, {
    variables: { productId: router.query.productId },
  });

  console.log("=======");
  console.log(data);
  console.log("=======");
  console.log(router);

  return (
    <div>
      <div>판매자: {data ? data.fetchProduct.seller : "로딩중입니다."}</div>
      <div>상품명: {data ? data.fetchProduct.name : "로딩중입니다."}</div>
      <div>상품내용:{data ? data.fetchProduct.detail : "로딩중입니다."}</div>
      <div>상품가격: {data ? data.fetchProduct.price : "로딩중입니다."}</div>
    </div>
  );
}
