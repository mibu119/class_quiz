import BannerLayout from "./banner";
import FooterLayout from "./footer";
import HeaderLayout from "./header";
import NavigationLayout from "./navigation";
import styled from "@emotion/styled";

interface ILayoutProps {
  children: JSX.Element;
}

const Container = styled.div`
  font-family: "commonFont";
`;

export default function Layout(props: ILayoutProps) {
  return (
    <Container>
      <HeaderLayout />
      <BannerLayout />
      <NavigationLayout />
      <div style={{ height: "700px", display: "flex" }}>
        <div style={{ width: "30%", backgroundColor: "skyblue" }}>
          Sidebar section
        </div>
        <div style={{ width: "70%" }}>{props.children}</div>
      </div>
      <FooterLayout />
    </Container>
  );
}
