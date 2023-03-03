import { Page } from "./Pagination01.styles";
import { IPageations01UIProps } from "./Pagination01.types";

export default function PaginationUI(props: IPageations01UIProps) {
  return (
    <>
      <Page onClick={props.onClickPrevPage} isActive={false}>
        이전페이지
      </Page>
      {new Array(10).fill(1).map(
        (_, index) =>
          props.startPage + index <= props.lastPage && (
            <Page
              isActive={props.startPage + index === props.activePage}
              id={String(props.startPage + index)}
              onClick={props.onClickPage}
              key={props.startPage + index}
            >
              {props.startPage + index}
            </Page>
          )
      )}
      <Page onClick={props.onClickNextPage} isActive={false}>
        다음페이지
      </Page>
    </>
  );
}
