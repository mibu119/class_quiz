import { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";

const CREATE_PRODUCT = gql`
  mutation createProduct(
    $seller: String
    $createProductInput: CreateProductInput!
  ) {
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      number
    }
  }
`;

export default function SubmitPage() {
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
    try {
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
    } catch (error) {
      console.log(router);
      console.log(error.message);
    }
  };

  return (
    <div>
      <div>
        판매자:
        <input onChange={onChangeSeller} type="text"></input>
      </div>
      <div>
        상품명:
        <input onChange={onChangeName} type="text"></input>
      </div>
      <div>
        상품내용:
        <input onChange={onChangeDetail} type="text"></input>
      </div>
      <div>
        상품가격:
        <input onChange={onChangePrice} type="text"></input>
      </div>
      <button onClick={onClickSubmit}>상품 등록</button>
    </div>
  );
}
