import { useQuery, gql } from "@apollo/client";
import { MouseEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
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

const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;

export default function StaticRoutedPage() {
  const [startPage, setStartPage] = useState(1);

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const { data: dataBoardCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  // const lastPage = Math.ceil(전체게시수 / 10)
  const lastPage =
    dataBoardCount != null
      ? Math.ceil(dataBoardCount?.fetchBoardsCount / 10)
      : 0;

  const onClickPage = (e: MouseEvent<HTMLSpanElement>) => {
    void refetch({ page: Number(e.currentTarget.id) });
  };

  const onClickPrevPage = (e: MouseEvent<HTMLSpanElement>) => {
    if (startPage === 1) return;

    setStartPage(startPage - 10);
    void refetch({ page: startPage - 10 });
  };
  const onClickNextPage = (e: MouseEvent<HTMLSpanElement>) => {
    if (startPage + 10 <= lastPage) return;

    setStartPage(startPage + 10);
    void refetch({ page: startPage + 10 });
  };

  return (
    <>
      {data?.fetchBoards?.map((el) => (
        <div key={el?.number}>
          <p>글쓴이: {el?.writer}</p>
          <p>제목: {el?.title}</p>
        </div>
      ))}

      <span onClick={onClickPrevPage}>이전페이지</span>
      {new Array(10).fill(1).map(
        (_, index) =>
          index + startPage <= lastPage && (
            <span
              id={String(index + startPage)}
              onClick={onClickPage}
              key={index + startPage}
            >
              {index + startPage}
            </span>
          )
      )}
      <span onClick={onClickNextPage}>다음페이지</span>
    </>
  );
}
