import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      writer
      title
      contents
    }
  }
`;

export default function DynamicRoutedPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      number: Number(router.query.number),
    },
  });

  console.log(data);

  const onClickMoveToEdit = () => {
    router.push(`/06-01-boards/${router.query.number}/edit`);
  };

  return (
    <div>
      <p>{router.query.number}번 게시글로 이동이 완료되었습니다.</p>
      <p>작성자: {data?.fetchBoard.writer}</p>
      <p>제목: {data?.fetchBoard.title}</p>
      <p>내용: {data?.fetchBoard.contents}</p>
      <button onClick={onClickMoveToEdit}>수정하기</button>
    </div>
  );
}
