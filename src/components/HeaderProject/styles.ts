import styled from "styled-components"

export const HeaderProjectWrapper = styled.header`
  width: 100%;
  height: 20rem;
  position: relative;

  /* sm applies to x-small devices (portrait phones, less than 576px) */
  @media (max-width: 576px) { 
    height: 10rem;
  }

  /* md applies to small devices (landscape phones, less than 768px) */
  @media (min-width: 768px) {  }

  /* lg applies to medium devices (tablets, less than 992px) */
  @media (min-width: 768px) and (max-width: 992px) { 
    height: 10rem;
  }

  /* xl applies to large devices (desktops, less than 1200px) */
  @media (min-width: 1200px) and (max-width: 1399.99px) { 
    height: 17rem;
  }

  /* xxl applies to x-large devices (large desktops, less than 1400px) */
  @media (min-width: 1400px) { 

  }
`

interface BackgroundProps {
}

export const Background = styled.div<BackgroundProps>`
  position: absolute;
  width: 52%;
  height: 80%;
  right: 0;

  /* sm applies to x-small devices (portrait phones, less than 576px) */
  @media (max-width: 576px) { 
    width: 100%;
    height: 100%;
  }

  /* lg applies to medium devices (tablets, less than 992px) */
  @media (min-width: 768px) and (max-width: 992px) { 
    width: 100%;
    height: 100%;
  }
`

export const Filter = styled.div`
  position: absolute;
  width: 100%;
  height: 80%;
  background: linear-gradient(90deg,#000000 50.98%,rgba(0,0,0,0.2) 76.07%,#000000 94.43%);
  
  /* sm applies to x-small devices (portrait phones, less than 576px) */
  @media (max-width: 576px) { 
    background: radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.43) 0%, rgba(0, 0, 0, 0.78) 100%);
    height: 100%;
  }

  /* lg applies to medium devices (tablets, less than 992px) */
  @media (min-width: 768px) and (max-width: 992px) { 
    background: radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.43) 0%, rgba(0, 0, 0, 0.78) 100%);
    height: 100%;
  }
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
  @media (max-width: 576px) { 
    padding: 0 .5rem;
    align-items: center;
    grid-column-gap: 1rem;
  }

  /* md applies to small devices (landscape phones, less than 768px) */
  @media (min-width: 768px) {  }

  /* lg applies to medium devices (tablets, less than 992px) */
  @media (min-width: 768px) and (max-width: 992px) { 
    padding: 0 2rem;
    align-items: center;
    grid-column-gap: 1rem;
  }

  /* xl applies to large devices (desktops, less than 1200px) */
  @media (min-width: 1200px) and (max-width: 1399.99px) { 
    padding: 8.5rem 4rem 0 4rem;
  }

  /* xxl applies to x-large devices (large desktops, less than 1400px) */
  @media (min-width: 1400px) { 
    padding: 12.6rem 10rem 0rem 10rem;
  }
`;

export const ProfilePictureContent = styled.div`
  --size-picture: 8rem;
  width: var(--size-picture);
  height: var(--size-picture);
  background-color: #000;
  border-radius: 10px;

  /* sm applies to x-small devices (portrait phones, less than 576px) */
  @media (max-width: 576px) { 
    --size-picture: 5.5rem;
  }

  /* lg applies to medium devices (tablets, less than 992px) */
  @media (min-width: 768px) and (max-width: 992px) { 
    --size-picture: 6.5rem;
  }

  /* xl applies to large devices (desktops, less than 1200px) */
  @media (min-width: 1200px) { 
    --size-picture: 7.5rem;
  }
`

export const ProfilePicture = styled.picture`
  width: 100%;
  height: 100%;
  position: relative;
  display: inline-block;
`

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  /* sm applies to x-small devices (portrait phones, less than 576px) */
  @media (max-width: 576px) { 
    justify-content: center;
    gap: 0.5rem;
  }
`

export const Title = styled.h1`
  font-weight: 700;
  font-size: 1.7em;
  color: ${({ theme }) => theme.color.title };

  /* sm applies to x-small devices (portrait phones, less than 576px) */
  @media (max-width: 576px) { 
    font-size: 1.4em;
  }

  /* lg applies to medium devices (tablets, less than 992px) */
  @media (min-width: 768px) and (max-width: 992px) { 
    font-size: 1.4em;
  }

  /* xl applies to large devices (desktops, less than 1200px) */
  @media (min-width: 1200px) { 
    font-size: 1.4em;
  }
`

export const Company = styled.p`
  font-weight: 700;
  font-size: 1.3em;
  color: ${({ theme }) => theme.color.highlight };

  /* sm applies to x-small devices (portrait phones, less than 576px) */
  @media (max-width: 576px) { 
    font-size: 1em;
  }

  /* lg applies to medium devices (tablets, less than 992px) */
  @media (min-width: 768px) and (max-width: 992px) { 
    font-size: 1em;
  }

  /* xl applies to large devices (desktops, less than 1200px) */
  @media (min-width: 1200px) { 
    font-size: 1.1em;
  }
`


export const ContainerButtons = styled.div`
  display: flex;
  gap: 1rem;
  flex-grow: 1;
  align-items: center;

  & a {
    padding: 0.5rem 0.8rem;
    height: 0.8em;
    font-size: .80em;
  }
  
  & a > svg {
    height: 0.8rem;
  }

  /* sm applies to x-small devices (portrait phones, less than 576px) */
  @media (max-width: 576px) { 
    flex-grow: unset;
    
    & a {
      padding: 0.5rem 0.8rem;
      height: 0.8em;
      font-size: .70em;
    }

    & a > svg {
      height: 0.8rem;
    }
  }
`

export const Picture = styled.picture`
  width: 100%;
  height: 100%;
  position: relative;
  display: inline-block;

  & > img {
    object-fit: cover;
  }
`;