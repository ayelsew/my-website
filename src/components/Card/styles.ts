import styled from "styled-components";

interface CardWrapperProps {
  readonly $background?: string
}

export const CardWrapper = styled.article<CardWrapperProps>`
  box-shadow: 4px 7px 0px rgba(0, 0, 0, 0.05);
  width: 21rem;
  height: 12.8rem;
  border-radius: 10px;
  background: ${({ $background }) => `url(${$background})` || "#383838"};
  background-position: center;
  background-size: 100%;
  overflow: hidden;
`
export const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 21px;
  background: linear-gradient(110.08deg, rgba(3, 3, 3, 0.85) 39.98%, rgba(0, 0, 0, 0.11) 100%);
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto 1fr auto;
`;

export const Title = styled.h3`
  grid-column-start: 1;
  grid-column-end: 3;
  font-weight: 700;
  font-size: 1.2em;
  color: ${({ theme }) => theme.color.title};
  margin-bottom: 4px;
`;

export const Description = styled.p`
  grid-column-start: 1;
  grid-column-end: 3;
  font-weight: 400;
  font-size: .92em;
  line-height: 18px;
  color: ${({ theme }) => theme.color.text};
`;

export const ProfilePicture = styled.span`
  width: 50px;
  height: 50px;
  background-color: #0007;
  align-self: end;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ButtonsArea = styled.div`
  align-self: end;
  justify-self: end;
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 8px;
`;
