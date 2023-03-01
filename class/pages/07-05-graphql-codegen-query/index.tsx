import { useQuery, gql } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../src/commons/types/generated/types";

const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutedPage() {
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: {
        number: 500,
      },
    }
  );

  return (
    <div>
      <p>작성자: {data?.fetchBoard?.writer}</p>
      <p>제목: {data?.fetchBoard?.title}</p>
      <p>내용: {data?.fetchBoard?.contents}</p>
    </div>
  );
}
