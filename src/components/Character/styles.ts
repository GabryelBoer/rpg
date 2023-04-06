import styled from "styled-components";

export const Container = styled.div<{
  size: number;
  left: number;
  top: number;
  sidePos: number;
}>`
  position: absolute;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  left: ${(props) => props.left}px;
  top: ${(props) => props.top}px;
  background-image: url("/assets/char.png");
  background-position: 0px ${(props) => props.sidePos}px;
`;

export const NickName = styled.div`
  position: absolute;
  background-color: #0009;
  border-radius: 3px;
  padding: 0px 5px;
  margin-top: 30px;
  font-size: 0.7em;
`;
