import styled from "styled-components";

interface ButtonWrapperProps {
  readonly $fill: boolean
  readonly $color?: string
  readonly $stretch?: string
}

export const ButtonWrapper = styled.button<ButtonWrapperProps>`
  min-width: ${({ $stretch }) => $stretch || "unset" };
  width: 100px;
  height: 25px;
  border-radius: 30px;
  font-weight: ${({ $fill }) => $fill ? 500 : 700};
  font-size: .73em;
  color: ${({ theme: { button }, $fill, $color }) => $fill ? button.text : $color || button.fill};
  background-color: ${({ theme: { button }, $fill }) => $fill ? button.fill : "transparent"};
  border-width: 2px;
  border-color: ${({ theme, $color }) =>  $color || theme.button.fill};
  border-style: solid;
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 6px;
  align-content: center;
  justify-items: center;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &.medium {
    width: 130px;
    height: 30px;
  }

  &.large {
    width: 135px;
    height: 35px;
  }
`;

