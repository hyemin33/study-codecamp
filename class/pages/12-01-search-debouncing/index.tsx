import { useQuery, gql } from "@apollo/client";
import { ChangeEvent, MouseEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";

import _ from "lodash";

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
  const [keyword, setKeyword] = useState("");

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  // const lastPage = Math.ceil(전체게시수 / 10)

  const onClickPage = (e: MouseEvent<HTMLSpanElement>) => {
    void refetch({ search, page: Number(e.currentTarget.id) });
  };

  const getDebounce = _.debounce((value) => {
    void refetch({ search: value, page: 1 });
    setKeyword(value);
  }, 1000);

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    //setSearch(e.target.value);
    //void refetch({ search: e.target.value, page: Number(e.target.value) });
    getDebounce(e.target.value);
  };

  return (
    <>
      <input type="text" onChange={onChangeSearch} />
      {data?.fetchBoards?.map((el) => (
        <div key={el?.number}>
          <p>글쓴이: {el?.writer}</p>
          <p>
            제목:
            {el.title
              .replaceAll(keyword, `#$%${keyword}#$%`)
              .split("#$%")
              .map((el) => (
                <span
                  key={el}
                  style={{ color: el === keyword ? "red" : "black" }}
                >
                  {el}
                </span>
              ))}
          </p>
        </div>
      ))}

      {new Array(10).fill(1).map((_, index) => (
        <span id={String(index + 1)} onClick={onClickPage} key={index + 1}>
          {index + 1}
        </span>
      ))}
    </>
  );
}
