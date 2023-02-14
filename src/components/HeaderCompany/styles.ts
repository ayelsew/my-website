import styled from "styled-components"

export const HeaderCompanyWrapper = styled.header`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 2rem;
`;

export const ProfilePicture = styled.div`
  width: 6rem;
  height: 6rem;
  position: relative;
`;

export const HeaderContent = styled.div`

`;

export const Title = styled.h1`
  margin-bottom: .5rem;
`

export const Role = styled.p`
  font-weight: 400;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.color.highlight };
`

export const Period = styled.p`
  font-weight: 400;
  font-size: 1rem;
`

export const PeriodStart = styled.time``

export const PeriodEnd = styled.time``

export const BackButtonContainer = styled.div``
