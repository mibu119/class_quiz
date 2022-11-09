import ProductQueryUI from "./ProductQuery.presenter";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";
import { FETCH_PRODUCTS } from "./ProductQuery.queries";
import { DELETE_PRODUCT } from "./ProductQuery.queries";
import { useState } from "react";

export default function ProductQuery() {
  const router = useRouter("");
  const [deleteProduct] = useMutation(DELETE_PRODUCT);
  const [checkbox, setCheckbox] = useState(false);

  const { data } = useQuery(FETCH_PRODUCTS, {
    variables: { page: router.query.page },
  });

  console.log("=======");
  console.log(data?.fetchProducts);
  console.log("=======");

  const onChangeCheckbox = (event) => {
    setCheckbox(event.target.value);
  };

  const onClickDelete = async (event) => {
    if (checkbox) {
      console.log(event.target.id);
      await deleteProduct({
        variables: {
          productId: event.target.id,
        },
        refetchQueries: [{ query: FETCH_PRODUCTS }],
      });
    } else if (!checkbox) {
      alert("무엇을 삭제할지 선택되지 않았습니다.");
    }
  };

  return (
    <ProductQueryUI
      data={data}
      delete={onClickDelete}
      checkbox={onChangeCheckbox}
    />
  );
}
