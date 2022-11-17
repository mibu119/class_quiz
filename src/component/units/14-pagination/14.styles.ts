import styled from "@emotion/styled";
import { DoubleLeftOutlined, DoubleRightOutlined } from "@ant-design/icons";

export const PageNum = styled.button`
  margin: 10px;
  color: ${(props) => (props.isPageOn ? "blue" : "black")};
`;
export const PrevButton = styled(DoubleLeftOutlined)`
  &[disabled] {
    color: red;
  }
`;

export const NextButton = styled(DoubleRightOutlined)`
  &[disabled] {
    color: red;
  }
`;
