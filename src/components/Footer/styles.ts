import styled from "styled-components"

export const FooterWrapper = styled.footer`
  background-color: #151515;
  padding-bottom: 4rem;
`

export const Content = styled.div`
  display: flex;
  padding: 0 1.2rem;
  padding-top: 1.2rem;
`


export const ContactArea = styled.div`
  display: flex;
  flex-direction: column;

  a:nth-child(2) {
    padding: 0.3rem 0;
  }
`;

export const Contact = styled.a`
  display: flex;
  font-weight: 500;
  font-size: .8em;
  color: ${({ theme }) => theme.color.text};
  align-items: center;
  
  svg {
    margin-right: 13px;
  }

  /* sm applies to x-small devices (portrait phones, less than 576px) */
  @media (min-width: 576px) {  

  }

  /* md applies to small devices (landscape phones, less than 768px) */
  @media (min-width: 768px) {  }

  /* lg applies to medium devices (tablets, less than 992px) */
  @media (max-width: 992px) { 
    font-size: .7em;
  }

  /* xl applies to large devices (desktops, less than 1200px) */
  @media (min-width: 1200px) {  }

  /* xxl applies to x-large devices (large desktops, less than 1400px) */
  @media (min-width: 1400px) { 
    font-size: .9em;
  }
`;

export const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const brand = styled.span`
  color: ${({ theme }) => theme.color.text};
  font-weight: 500;
  font-size: .7em;
  display: inline-block;
  width: 100%;
  text-align: center;
  padding-top: 1rem;
`;
