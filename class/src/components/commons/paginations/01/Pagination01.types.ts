import { MouseEvent } from "react";

export interface IPagination01Props {
  count: number;
  refetch: any;
  activePage: number;
}

export interface IPageations01UIProps {
  onClickPrevPage: (e: MouseEvent<HTMLSpanElement>) => void;
  onClickNextPage: (e: MouseEvent<HTMLSpanElement>) => void;
  onClickPage: (e: MouseEvent<HTMLSpanElement>) => void;
  startPage: number;
  activePage: number;
  lastPage: number;
}

export interface IPageProps {
  isActive: boolean;
}
