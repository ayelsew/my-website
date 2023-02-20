import styled from "styled-components";

interface CardWrapperProps {
  readonly $background?: string
}

export const CardWrapper = styled.article<CardWrapperProps>`
  box-shadow: 4px 7px 0px rgba(0, 0, 0, 0.05);
  width: 21.5rem;
  height: 12.8rem;
  border-radius: 10px;
  background: ${({ $background }) => `url(${$background})` || "#383838"};
  background-position: center;
  background-size: 100%;
  overflow: hidden;

  /* sm applies to x-small devices (portrait phones, less than 576px) */
  @media (max-width: 576px) { 
    width: 20rem;
  }

  /* md applies to small devices (landscape phones, less than 768px) */
  @media (min-width: 768px) {  }

  /* lg applies to medium devices (tablets, less than 992px) */
  @media (min-width: 992px) {  }

  /* xl applies to large devices (desktops, less than 1200px) */
  @media (min-width: 1200px) {  }

  /* xxl applies to x-large devices (large desktops, less than 1400px) */
  @media (min-width: 1400px) { 
    width: 26.5rem;
    height: 15.8rem;
  }
`
export const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.25rem;
  background: linear-gradient(110.08deg, rgba(3, 3, 3, 0.85) 39.98%, rgba(0, 0, 0, 0.11) 100%);
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto 1fr auto;

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
    padding: 1.60rem;
  }
`;

export const Title = styled.h3`
  grid-column-start: 1;
  grid-column-end: 3;
  font-weight: 500;
  font-size: 1.2em;
  color: ${({ theme }) => theme.color.title};
  margin-bottom: .4rem;

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
    font-size: 1.3em;
  }
`;

export const Description = styled.p`
  grid-column-start: 1;
  grid-column-end: 3;
  font-weight: 400;
  font-size: .95em;
  line-height: 1.05rem;
  color: ${({ theme }) => theme.color.text};

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
    font-size: 1.1em;
    line-height: 1.25rem;
  }
`;

export const ProfilePicture = styled.span`
  --size-picture: 3.2rem;
  width: var(--size-picture);
  height: var(--size-picture);
  background-color: #0007;
  align-self: end;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

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
    --size-picture: 3.6rem;
  }
`

export const ButtonsArea = styled.div`
  align-self: end;
  justify-self: end;
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 0.5rem;
`;
