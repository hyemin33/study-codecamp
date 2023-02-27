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
      number: Number(router.query.routeList),
    },
  });

  console.log(data);

  return (
    <div>
      <p>작성자: {data?.fetchBoard.writer}</p>
      <p>제목: {data?.fetchBoard.title}</p>
      <p>내용: {data?.fetchBoard.contents}</p>
    </div>
  );
}
