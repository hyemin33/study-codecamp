import styled from "@emotion/styled";
import { IPageProps } from "./Pagination01.types";

export const Page = styled.span`
  margin: 0 10px;
  color: ${(props: IPageProps) => (props.isActive ? "blue" : "black")};
`;
