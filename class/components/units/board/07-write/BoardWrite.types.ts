import { ChangeEvent } from "react";

export interface IBoardWriteProps {
  isEdit: boolean;
  data?: any;
}

export interface IUpdateVariables {
  number: number;
  writer?: string;
  title?: string;
  contents?: string;
}

export interface IBoardWriteUiProps {
  onChangeWriter: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickSubmit: () => void;
  onClickUpdate: () => void;
  isEdit: boolean;
  data: any;
}

export interface IButtonProps {
  color: string;
}
