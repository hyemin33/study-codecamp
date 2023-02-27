import { gql, useMutation } from "@apollo/client";
import { useState } from "react";

const CREATE_PRODUCT = gql`
  mutation createProduct(
    $seller: String
    $createProductInput: CreateProductInput!
  ) {
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [seller, setSeller] = useState("");
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [price, setPrice] = useState(0);

  const [my] = useMutation(CREATE_PRODUCT);

  const onClickSubmit = async () => {
    const result = await my({
      variables: {
        // variables 가 $ 역할을 함.
        seller: seller,
        createProductInput: {
          name: name,
          detail: detail,
          price: Number(price),
        },
      },
    });
    alert(result.data.createProduct.message);
    setName("");
    setDetail("");
    setPrice(0);
    setSeller("");
  };

  return (
    <>
      <div>
        <p>GRAPHQL-API(동기) 상품구매 </p>
        상품이름 :
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <br />
        상품상세 :
        <input
          type="text"
          onChange={(e) => setDetail(e.target.value)}
          value={detail}
        />
        <br />
        가격 :
        <input
          type="number"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
        <br />
        판매자 :
        <input
          type="text"
          onChange={(e) => setSeller(e.target.value)}
          value={seller}
        />
        <br />
        <button onClick={onClickSubmit}>상품 등록</button>
      </div>
    </>
  );
}
