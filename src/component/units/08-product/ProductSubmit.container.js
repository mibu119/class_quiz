import ProductSubmitUI from "./ProductSubmit.presenter";
import { useRouter } from "next/router";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_PRODUCT } from "./ProductSubmit.queries";
import { UPDATE_PRODUCT } from "./ProductSubmit.queries";

export default function ProductSubmit(props) {
  const router = useRouter("");

  const [createProduct] = useMutation(CREATE_PRODUCT);
  const [updateProduct] = useMutation(UPDATE_PRODUCT);
  const [seller, setSeller] = useState("");
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [price, setPrice] = useState("");
  const [isTrue, setIsTrue] = useState(false);

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

  //등록하기 버튼
  const onClickSubmit = async () => {
    setIsTrue((prev) => !prev);
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
    router.push(`/08/${result.data.createProduct._id}`);
  };

  // 수정하기 버튼
  const onClickEdit = async () => {
    const result = await updateProduct({
      variables: {
        productId: router.query.productId,
        updateProductInput: {
          name: name,
          detail: detail,
          price: Number(price),
        },
      },
    });
    router.push(`/08/${result.data.updateProduct._id}`);
    alert("수정이 완료되었습니다.");
    console.log(result);
  };

  return (
    <ProductSubmitUI
      seller={onChangeSeller}
      name={onChangeName}
      detail={onChangeDetail}
      price={onChangePrice}
      c_submit={onClickSubmit}
      true={isTrue}
      edit={props.isEdit}
      c_edit={onClickEdit}
    />
  );
}
