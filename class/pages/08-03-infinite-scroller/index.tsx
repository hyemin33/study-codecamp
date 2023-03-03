import { useQuery, gql } from "@apollo/client";
import { MouseEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";

import InfiniteScroll from "react-infinite-scroller";

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
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const onLoadMore = () => {
    if (data === undefined) return;

    void fetchMore({
      variables: { page: Math.ceil(data?.fetchBoards?.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchBoards) {
          return {
            fetchBoards: [...prev.fetchBoards],
          };
        }

        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        };
      },
    });
  };

  return (
    <>
      <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true}>
        {data?.fetchBoards?.map((el) => (
          <div key={el?.number}>
            <p>글쓴이: {el?.writer}</p>
            <p>제목: {el?.title}</p>
          </div>
        )) ?? <div></div>}
      </InfiniteScroll>
    </>
  );
}
