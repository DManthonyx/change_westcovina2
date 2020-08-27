import styled from 'styled-components'

export const PageWrapper = styled.div`
`

export const ContentWrapper = styled.div`
  .fade-enter {
    opacity: 0.01;
  }

  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 500ms ease-in;
  }

  .fade-exit {
    opacity: 0;
  }

  .fade-exit.fade-exit-active {
    /* opacity: 0.00;
    transition: opacity 500ms ease-in; */
  }

  div.transition-group {
    position: relative;
  }

  section.route-section {
    position: absolute;
    width: 100%;
    top: 78px;
    left: 0;
    @media (max-width: 950px) {
    top: 40px;
  }
  }
`;