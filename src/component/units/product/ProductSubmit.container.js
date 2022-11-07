import { useRouter } from "next/router";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_PRODUCT } from "./ProductSubmit.queries";
import ProductSubmitUI from "./ProductSubmit.presenter";

export default function ProductSubmit() {
  const router = useRouter("");

  const [createProduct] = useMutation(CREATE_PRODUCT);
  const [seller, setSeller] = useState("");
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [price, setPrice] = useState("");

  const onChangeSeller = (event) => {
    setSeller(event.target.value);
  };

  const onChangeName = (event) => {
    setName(event.target.value);
  };

  const onChangeDetail = (event) => {
    setDetail(event.target.value);
  };

  const onChangePrice = (event) => {
    setPrice(event.target.value);
  };

  const onClickSubmit = async () => {
    const result = await createProduct({
      variables: {
        seller,
        createProductInput: {
          name: name,
          detail: detail,
          price: Number(price),
        },
      },
    });
    console.log(result);
    router.push(`/05/boards_submit/${result.data.createProduct._id}`);
  };

  return (
    <ProductSubmitUI
      seller={onChangeSeller}
      name={onChangeName}
      detail={onChangeDetail}
      price={onChangePrice}
      click={onClickSubmit}
    />
  );
}
