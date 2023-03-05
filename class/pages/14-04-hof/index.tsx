import { useQuery, gql } from "@apollo/client";
import { MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      number
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutedPage() {
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  // const lastPage = Math.ceil(전체게시수 / 10)

  const onClickPage = (boardId: number) => (e: MouseEvent<HTMLSpanElement>) => {
    void refetch({ page: Number(boardId) });
  };

  return (
    <>
      {data?.fetchBoards?.map((el) => (
        <div key={el?.number}>
          <p>글쓴이: {el?.writer}</p>
          <p>제목: {el?.title}</p>
        </div>
      ))}

      {new Array(10).fill(1).map((_, index) => (
        <span onClick={onClickPage(index + 1)} key={index + 1}>
          {index + 1}
        </span>
      ))}
    </>
  );
}
