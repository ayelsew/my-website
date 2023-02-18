import styled from "styled-components"

export const HeaderCompanyWrapper = styled.header`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 2rem;

  /* sm applies to x-small devices (portrait phones, less than 576px) */
  @media (max-width: 576px) {
    grid-column-gap: 1rem;
    padding: 2rem 1.2rem;
  }
`;

export const ProfilePicture = styled.div`
  --size-picture: 6rem; 
  width: var(--size-picture);
  height: var(--size-picture);
  position: relative;


  /* sm applies to x-small devices (portrait phones, less than 576px) */
  @media (max-width: 576px) {
    --size-picture: 5.5rem; 
  }
`;

export const HeaderContent = styled.div`

`;

export const Title = styled.h1`
  margin-bottom: .5rem;
  
  /* sm applies to x-small devices (portrait phones, less than 576px) */
  @media (max-width: 576px) {
    font-size: 1.4em;
  }
`

export const Role = styled.p`
  font-weight: 400;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.color.highlight};

  /* sm applies to x-small devices (portrait phones, less than 576px) */
  @media (max-width: 576px) {
    font-size: 1em;
  }
`

export const Period = styled.p`
  font-weight: 400;
  font-size: 1rem;

  /* sm applies to x-small devices (portrait phones, less than 576px) */
  @media (max-width: 576px) {
    font-size: .854em;
  }
`

export const PeriodStart = styled.time``

export const PeriodEnd = styled.time``

export const BackButtonContainer = styled.div``
