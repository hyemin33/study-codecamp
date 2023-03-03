import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../src/commons/types/generated/types";
import Pagination01 from "../../src/components/commons/paginations/01/Pagination01.container";

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

export default function PaginationComponentPage() {
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const { data: dataBoardCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  return (
    <>
      {data?.fetchBoards?.map((el) => (
        <div key={el?.number}>
          <p>글쓴이: {el?.writer}</p>
          <p>제목: {el?.title}</p>
        </div>
      ))}
      <Pagination01
        data={data}
        count={Number(dataBoardCount?.fetchBoardsCount)}
        refetch={refetch}
      />
    </>
  );
}
