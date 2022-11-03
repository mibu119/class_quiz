import { gql, useMutation } from "@apollo/client";
import { useState } from "react";

const GRAPHQL_API = gql`
  mutation createProduct(
    $seller: String
    $createProductInput: CreateProductInput!
  ) {
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      message
      number
    }
  }
`;

export default function GraphqlMutationPage() {
  const [createProduct] = useMutation(GRAPHQL_API);

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

  const onClickGraphql = async () => {
    const result = await createProduct({
      variables: {
        seller: seller,
        createProductInput: {
          name: name,
          detail: detail,
          price: Number(price),
        },
      },
    });
    console.log(result);
  };

  return (
    <>
      판매자: <input type="text" onChange={onChangeSeller}></input>
      <div>판매할 물건 입력</div>
      <div>
        물건명: <input type="text" onChange={onChangeName} />
      </div>
      <div>
        설명: <input type="text" onChange={onChangeDetail} />
      </div>
      <div>
        가격: <input type="text" onChange={onChangePrice} />
      </div>
      <button onClick={onClickGraphql}>GRAPHQL-API 요청하기</button>
    </>
  );
}
