import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import ProductQueryUI from "./ProductQuery.presenter";
import { FETCH_PRODUCT } from "./ProductQuery.queries";

export default function ProductQuery() {
  const router = useRouter("");

  const { data } = useQuery(FETCH_PRODUCT, {
    variables: { productId: router.query.productId },
  });

  return <ProductQueryUI data={data} />;
}
