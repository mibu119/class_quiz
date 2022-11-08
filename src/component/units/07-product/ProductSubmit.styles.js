import styled from "@emotion/styled";

export const RedInput = styled.input`
  border-color: yellow;
`;

export const BlueButton = styled.button`
  background-color: ${(props) => (props.isTrue ? "red" : "blue")};
`;
