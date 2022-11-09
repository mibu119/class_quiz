import { List, Seller, Detail, Checkbox } from "./ProductQuery.styles.js";

export default function ProductQueryUI(props) {
  return (
    <div>
      {props.data?.fetchProducts.map((el) => (
        <List key={el._id}>
          <Checkbox type={"checkbox"} onChange={props.checkbox}></Checkbox>
          <Seller>판매자: {el.seller}</Seller>
          <div>상품명: {el.name}</div>
          <Detail>상품내용: {el.detail}</Detail>
          <div>상품가격: {el.price}</div>
          <button id={el._id} onClick={props.delete}>
            삭제
          </button>
        </List>
      ))}
    </div>
  );
}
