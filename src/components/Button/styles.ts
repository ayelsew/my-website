import styled from "styled-components";

interface ButtonWrapperProps {
  readonly $fill: boolean
}

export const ButtonWrapper = styled.button<ButtonWrapperProps>`
  width: 100px;
  height: 25px;
  border-radius: 30px;
  font-weight: ${({ $fill }) => $fill ? 500 : 700};
  font-size: .73em;
  color: ${({ theme: { button }, $fill }) => $fill ? button.text : button.fill};
  background-color: ${({ theme: { button }, $fill }) => $fill ? button.fill : "transparent"};
  border-width: 2px;
  border-color: ${({ theme }) => theme.button.fill};
  border-style: solid;
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 6px;
  align-content: center;
  justify-items: center;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

