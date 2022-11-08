import styled from "@emotion/styled";

export const BlueButton = styled.button`
  border-color: ${(props) => (props.cc ? "red" : " ")};
`;
