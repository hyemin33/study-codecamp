import PaginationUI from "./Pagination01.presenter";
import { MouseEvent, useState } from "react";
import { IPagination01Props } from "./Pagination01.types";

export default function Pagination01(props: IPagination01Props) {
  const [startPage, setStartPage] = useState(1);
  const [activePage, setActivePage] = useState(1);

  // const lastPage = Math.ceil(전체게시수 / 10)
  const lastPage = props.count !== null ? Math.ceil(props.count / 10) : 0;

  const onClickPage = (e: MouseEvent<HTMLSpanElement>) => {
    const activePage = Number(e.currentTarget.id);
    setActivePage(activePage);
    void props.refetch({ page: activePage });
  };

  const onClickPrevPage = (e: MouseEvent<HTMLSpanElement>) => {
    if (startPage === 1) return;

    setStartPage(startPage - 10);
    setActivePage(startPage - 10);
    void props.refetch({ page: startPage - 10 });
  };
  const onClickNextPage = (e: MouseEvent<HTMLSpanElement>) => {
    if (startPage + 10 <= lastPage) {
      setStartPage(startPage + 10);
      setActivePage(startPage + 10);
      void props.refetch({ page: startPage + 10 });
    }
  };

  return (
    <PaginationUI
      startPage={startPage}
      activePage={activePage}
      lastPage={lastPage}
      onClickPage={onClickPage}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
    />
  );
}
