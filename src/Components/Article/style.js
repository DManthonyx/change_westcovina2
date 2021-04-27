import styled from 'styled-components';

export const Div = styled.div`
  &.wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 170px;
  }
  &.article-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
  }
  &.info-div {
    width: 880px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
  }
  &.info-left {
    width: 50%;
    display: flex;

  }
  &.info-right {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const H1 = styled.h1`

`;
export const H2 = styled.h2`
  margin: 30px 0px;
`
export const P = styled.p`
  width: 800px;
  padding-bottom: 40px;
  line-height: 1.7;
  font-size: 20px;
  margin: 0px;
`;
export const Span = styled.span`
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
    line-height: 1;
    padding: 0px;
  }
`;
export const Img = styled.img`
  &.article-img {
    width: 700px;
    height: 400px;
  }
  &.author-img {
    width: 70px;
    height: 70px;
    border-radius: 40px;
  }
`;
export const A = styled.a`
  padding-left: 10px;
`;