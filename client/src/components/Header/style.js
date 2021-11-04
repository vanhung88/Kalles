import styled, { keyframes } from "styled-components";
import { Row, Col } from "antd";
const HEIGHT_HEADER = 70;

export const Wrapper = styled(Row)`
  padding: 0px 90px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Header = styled.div`
  display: block;
  position: relative;
  height: ${HEIGHT_HEADER}px;
  right: 0;
  left: 0;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
export const H_Left = styled(Col)`
  display: flex;
`;
export const H_text = styled.div`
  font-weight: 500;
  cursor: pointer;

  font-size: 14px;
  margin-right: 20px;
`;
export const H_Logo = styled.img`
  width: 90px;
  height: ${HEIGHT_HEADER}px;
`;
export const H_Mid = styled(Col)`
  position: absolute;
  right: 50%;
  top: 0;
`;
export const H_Right = styled(Col)``;
export const H_icon = styled.div``;

export const InputFiled = styled.div`
  padding-left: 20px;
  margin-bottom: 23px;
  border-radius: 20px;
  width: ${({ $width }) => $width || "100%"}px;
  height: ${({ $height }) => $height || "100%"}px;
  &::placeholder {
    font-weight: 300;
    font-size: 15px;
    line-height: 20px;
    color: #949090;
  }
`;
