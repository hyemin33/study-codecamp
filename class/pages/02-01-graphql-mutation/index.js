import { gql, useMutation } from "@apollo/client";

const CREATE_BOARD = gql`
  mutation {
    createBoard(
      writer: "혜민"
      title: "오늘 점심메뉴 알림"
      contents: "오늘 점심은 고등어 구이 입니다. 맛있게 드세요~"
    ) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [my] = useMutation(CREATE_BOARD);

  const onClickSubmit = async () => {
    const result = await my();
    alert(result.data.createBoard.message);
  };

  return <button onClick={onClickSubmit}>GRAPHQL-API(동기)</button>;
}
