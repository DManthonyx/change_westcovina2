import styled from 'styled-components';

export const HamburgerContainer = styled.div`
  width: 40px;
  height: 25px;
  position: relative;
  left: -17px;
  display: none;
  margin-left: auto;
  cursor: pointer;
  @media (max-width: 1000px) {
    display: block;
  }
`;
export const HamburgerBar = styled.div`
  position: absolute;
  width: 25px;
  height: 3px;
  margin: 0px 0px 5px 0px;
  background-color: #EE8C3A;
  left: 0;
  /* transform: rotate(0deg); */
  transition: all .50s ease-in-out;
  &:nth-child(1) {
    top: 0px;
  }
  &:nth-child(2) {
    top: 8px
  }
  &:last-child {
    top: 16px;
  }
  .open > & {
    transition: all 1s ease-in-out;
  }
  .open  > &:first-child {
    top: 45%;
    transform: rotate(135deg);
    transition: all .50s ease-in-out;
  }
  .open > &:nth-child(2){
    opacity: 0;
    left: -60px;
    transition: all .50s ease-in-out;
  }
  .open > &:nth-child(3) {
    transform: rotate(-134deg);
    transition: all .50s ease-in-out;
    top: 11px;
  }
`;