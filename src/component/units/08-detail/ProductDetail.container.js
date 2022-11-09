import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { FETCH_PRODUCT } from "./ProductDetail.queries";
import ProductDetailUI from "./ProductDetail.presenter";

export default function ProductDetail() {
  const router = useRouter("");
  console.log(router);
  console.log(router.query.productId);

  const { data } = useQuery(FETCH_PRODUCT, {
    variables: { productId: router.query.productId },
  });

  const onClickMove = () => {
    router.push(`/08/${router.query.productId}/edit`);
  };

  return <ProductDetailUI data={data} c_edit={onClickMove} />;
}
