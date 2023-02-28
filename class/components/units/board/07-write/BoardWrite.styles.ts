import styled from "@emotion/styled";

interface IProps {
  color: string;
}
export const Button = styled.button`
  border: 1px solid #333;
  border-radius: 4px;
  background: none;
  padding: 10px;
  margin-top: 20px;
  color: ${({ props: IProps }) => props.color};
`;
