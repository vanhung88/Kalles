import styled from "styled-components";
export const Wrapper = styled.form`
  min-height: 150vh;
  ${"" /* background-color: #e4e7f2; */}
  padding: 0px 90px;
`;

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
