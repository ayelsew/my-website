import styled from "styled-components"

export const HeaderProjectWrapper = styled.header`
  width: 100%;
  height: 20rem;
  position: relative;
`

interface BackgroundProps {
  readonly $bgSrc?: string
}

export const Background = styled.div<BackgroundProps>`
  position: absolute;
  width: 52%;
  height: 80%;
  right: 0;
  background-image: url(${({ $bgSrc }) => $bgSrc });
  background-repeat: no-repeat;
  background-position-x: right;
  background-size: 100%;
  background-position-y: top;
`

export const Filter = styled.div`
  position: absolute;
  width: 100%;
  height: 80%;
  background: linear-gradient(90deg,#000000 50.98%,rgba(0,0,0,0.2) 76.07%,#000000 94.43%);
`

export const Content = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 11.5rem 4rem 0 4rem;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: start;
  grid-column-gap: 2rem;

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
    padding: 11.5rem 14rem 0rem 14rem;
  }
`;

export const ProfilePictureContent = styled.div`
  width: 8rem;
  height: 8rem;
  background-color: #000;
  border-radius: 10px;
`

export const ProfilePicture = styled.img`
  width: 100%;
`

export const HeaderContent = styled.div``

export const Title = styled.h1`
  font-weight: 700;
  font-size: 1.7em;
  color: ${({ theme }) => theme.color.title };
`

export const Company = styled.p`
  font-weight: 700;
  font-size: 1.3em;
  color: ${({ theme }) => theme.color.highlight }
`
