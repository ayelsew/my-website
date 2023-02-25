import styled from "styled-components";

interface ButtonWrapperProps {
  readonly $fill: boolean
  readonly $color?: string
  readonly $stretch?: string
}

export const ButtonWrapper = styled.a<ButtonWrapperProps>`
  min-width: ${({ $stretch }) => $stretch || "unset" };
  width: fit-content;
  height: 1.5rem;
  border-radius: 30px;
  font-weight: ${({ $fill }) => $fill ? 500 : 700};
  font-size: .80em;
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
  padding: 0.5rem 1rem;
  white-space: nowrap;

  &.medium {
    height: 2rem;
  }

  &.large {
    height: 35px;
  }

  & > svg {
    height: 1rem;
  }

  /* sm applies to x-small devices (portrait phones, less than 576px) */
  @media (min-width: 576px) {  }

  /* md applies to small devices (landscape phones, less than 768px) */
  @media (min-width: 768px) {  }

  /* lg applies to medium devices (tablets, less than 992px) */
  @media (min-width: 992px) {  }

  /* xl applies to large devices (desktops, less than 1200px) */
  @media (min-width: 1200px) {  }

  /* xxl applies to x-large devices (large desktops, less than 1400px) */
  @media (min-width: 1400px) { 
    font-size: .87em;
    height: 1.7rem;
  }
`;

